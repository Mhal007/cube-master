import React from 'react';

export const errorHandler = (error: any): JSX.Element =>
  Meteor.isProduction ? (
    <span>An error occurred.</span>
  ) : (
    <code>{JSON.stringify(error, null, 2)}</code>
  );
