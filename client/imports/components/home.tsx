import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

const Home: FC<RouteComponentProps> = () => (
  <div>
    {Meteor.userId() ? <>Welcome </> : <p>Please log in to continue.</p>}
  </div>
);

export default Home;
