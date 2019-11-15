import React from 'react';
import { setDefaults } from 'react-komposer';
import { Tracker } from 'meteor/tracker';

import Loader from '../components/loader';

const errorHandler = (error: any) =>
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

const getTrackerLoader = (reactiveMapper: any) => {
  return (props: any, onData: any, env: any) => {
    let trackerCleanup: any = null;
    const handler = Tracker.nonreactive(() => {
      return Tracker.autorun(() => {
        // assign the custom clean-up function.
        trackerCleanup = reactiveMapper(props, onData, env);
      });
    });

    return () => {
      if (typeof trackerCleanup === 'function') {
        trackerCleanup();
      }
      // @ts-ignore
      return handler.stop();
    };
  };
};

export const composer = (reactiveMapper: any, options: any) => {
  return compose(getTrackerLoader(reactiveMapper), options);
};
