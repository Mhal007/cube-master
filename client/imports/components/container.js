import React, { Component } from 'react';
import { Router } from '@reach/router';

import Loader from './loader';
import MenuTop from './menuTop';
import Results from './results';
import Training from './training';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisibleLoader: false
    };
  }

  onToggleLoader = newValue => this.setState({ isVisibleLoader: newValue });

  render() {
    const {
      onChangeTab,
      onToggleLoader,
      state: { isVisibleLoader }
    } = this;

    return (
      <div>
        <header>
          <Router>
            <MenuTop onChangeTab={onChangeTab} default />
          </Router>
        </header>

        {isVisibleLoader ? (
          <Loader />
        ) : (
          <Router>
            <Training
              onToggleLoader={onToggleLoader}
              path="/training"
              default
            />
            <Results path="/results" />
          </Router>
        )}

        <footer />
      </div>
    );
  }
}
