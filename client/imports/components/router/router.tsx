import React, { FunctionComponent } from 'react';
import { Segment } from 'semantic-ui-react';
import { Router } from '@reach/router';

import About from '../about';
import Home from '../home';
import MenuTop from '../menuTop';
import Results from '../results';
import Training from '../training';

type Props = {
  userId: string;
};

const RouterComponent: FunctionComponent<Props> = ({ userId }) => (
  <div>
    <header>
      <Router>
        <MenuTop default />
      </Router>
    </header>

    {!userId && (
      <div className="demo-mode-bar">
        You are currently in a demo mode. Please sign in to enable personalised
        results and features.
      </div>
    )}

    <main>
      <Segment>
        <Router>
          <Home path="/home" default />
          <Training key="training" demo={!userId} path="/training" />
          <Results key="results" demo={!userId} path="/results" />
          <About path="/about" />
        </Router>
      </Segment>
    </main>
  </div>
);

export default RouterComponent;
