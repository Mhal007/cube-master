import { Meteor } from 'meteor/meteor';

import { createAlgorithms } from './imports/algorithmsCreation';

Meteor.startup(() => {
  //UniConfig.private.runOnce('createAlgorithms', createAlgorithms);
  createAlgorithms();
});
