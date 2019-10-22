import { Meteor } from 'meteor/meteor';

import { createAlgorithms } from './AlgorithmsCreation';

Meteor.startup(() => {
  //UniConfig.private.runOnce('createAlgorithms', createAlgorithms);

  createAlgorithms();
});
