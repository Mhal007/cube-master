import { Meteor } from 'meteor/meteor';

import { createAlgorithms } from './algorithmsCreation';

Meteor.startup(() => {
  //UniConfig.private.runOnce('createAlgorithms', createAlgorithms);

  createAlgorithms();
});
