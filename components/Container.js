import React, { Component } from 'react';
import { Loader, Segment } from 'semantic-ui-react';

import MenuTop from './MenuTop.js';
import Results from './Results.js';
import Training from './Training.js';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'training',
      isVisibleLoader: true
    };

    this.onChangeTab = this.onChangeTab.bind(this);
  }

  onChangeTab = (e, { name }) => this.setState({ currentTab: name });
  onToggleLoader = newValue => this.setState({ isVisibleLoader: newValue });

  render() {
    const {
      onChangeTab,
      onToggleLoader,

      state: { currentTab, isVisibleLoader }
    } = this;

    return (
      <div className="container">
        <header>
          <MenuTop currentTab={currentTab} onChangeTab={onChangeTab} />
        </header>

        <Segment>
          {isVisibleLoader && <Loader content="Loading" />}

          <main>
            {(currentTab === 'training' || currentTab === 'debugging') && (
              <Training
                onToggleLoader={onToggleLoader}
                debugging={currentTab === 'debugging'}
              />
            )}
            {currentTab === 'results' && <Results />}
          </main>
        </Segment>

        <footer />
      </div>
    );
  }
}
