import React, { FunctionComponent } from 'react';
import { Segment } from 'semantic-ui-react';
import { Router } from '@reach/router';

import About from './about';
import Home from './home';
import MenuTop from './menuTop';
import Results from './results';
import Training from './training';

const RouterComponent: FunctionComponent = () => (
  <div>
    <header>
      <Router>
        <MenuTop default />
      </Router>
    </header>

    <nav>
      <Segment>
        <Router>
          <Home path="/home" />
          <Training path="/training" default />
          <Results path="/results" />
          <About path="/about" />
        </Router>
      </Segment>
    </nav>
  </div>
);

export default RouterComponent;
