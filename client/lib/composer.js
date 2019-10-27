import React from 'react';
import { setDefaults } from 'react-komposer';
import { Tracker } from 'meteor/tracker';

import Loader from '../components/loader';

const errorHandler = error =>
  Meteor.isProduction ? (
    <span>An error occurred.</span>
  ) : (
    <code>{JSON.stringify(error, null, 2)}</code>
  );

const compose = setDefaults({
  errorHandler,
  loadingHandler: Loader,
  pure: true
});

const getTrackerLoader = reactiveMapper => {
  return (props, onData, env) => {
    let trackerCleanup = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if (typeof trackerCleanup === 'function') trackerCleanup();
      return handler.stop();
    };
  };
};

export const composer = (reactiveMapper, options) => {
  return compose(
    getTrackerLoader(reactiveMapper),
    options
  );
};
