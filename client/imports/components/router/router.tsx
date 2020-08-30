import { Router as ReachRouter } from '@reach/router';
import React from 'react';
import { Segment } from 'semantic-ui-react';

import { About } from '../about';
import { Home } from '../home';
import { MenuTop } from '../menuTop';
import Results from '../results';
import Training from '../training';

type Props = {
  userId: string | null;
};

export const Router = ({ userId }: Props): JSX.Element => (
  <div>
    <header>
      <ReachRouter>
        <MenuTop default />
      </ReachRouter>
    </header>

    <div className={`demo-mode-bar${userId ? ' hidden' : ''}`}>
      You are currently in a demo mode. Please sign in to enable personalised
      results and features.
    </div>

    <main>
      <Segment>
        <ReachRouter>
          <Home path="/home" default />
          <Training key="training" path="/training" />
          <Results key="results" demo={!userId} path="/results" />
          <About path="/about" />
        </ReachRouter>
      </Segment>
    </main>
  </div>
);
