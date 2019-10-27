import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import Loader from './loader';
import MenuTop from './menuTop';
import Results from './results';
import Training from './training';

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
      <div className="segment">
        <header>
          <MenuTop currentTab={currentTab} onChangeTab={onChangeTab} />
        </header>

        <Segment>
          {isVisibleLoader && <Loader />}

          <main>
            {(currentTab === 'training' || currentTab === 'debugging') && (
              <Training
                onToggleLoader={onToggleLoader}
                debugging={currentTab === 'debugging'}
              />
            )}
            {currentTab === 'results' && (
              <Results debugging={currentTab === 'debugging'} />
            )}
          </main>
        </Segment>

        <footer />
      </div>
    );
  }
}
