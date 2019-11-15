import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
// @ts-ignore
import Blaze from 'meteor/gadicc:blaze-react-component';
import './loginButtons.html';

const Home: FunctionComponent<RouteComponentProps> = () => (
  <div>
    {Meteor.userId() ? <>Welcome </> : <p>Please log in to continue.</p>}
    <Blaze template="Accounts" />
  </div>
);

export default Home;
