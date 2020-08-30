import React from 'react';
import { RouteComponentProps } from '@reach/router';

type Props = RouteComponentProps & {};

export const Home = (props: Props) => (
  <div>
    {Meteor.userId() ? <>Welcome </> : <p>Please log in to continue.</p>}
  </div>
);
