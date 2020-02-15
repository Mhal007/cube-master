import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';

const Home: FunctionComponent<RouteComponentProps> = () => (
  <div>
    {Meteor.userId() ? <>Welcome </> : <p>Please log in to continue.</p>}
  </div>
);

export default Home;
