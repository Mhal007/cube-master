import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';

import { Router } from './router';

const RouterContainer = (): JSX.Element => {
  const { userId } = useTracker(() => {
    const userId = Meteor.userId();

    return {
      userId,
    };
  }, []);

  return <Router userId={userId} />;
};

export default RouterContainer;
