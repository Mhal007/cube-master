import { RouteComponentProps } from '@reach/router';
import React from 'react';

type Props = RouteComponentProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home = (props: Props): JSX.Element => (
  <div>
    {Meteor.userId() ? <>Welcome </> : <p>Please log in to continue.</p>}
  </div>
);
