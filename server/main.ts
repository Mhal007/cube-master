import { Meteor } from 'meteor/meteor';

import { createAlgorithms } from './imports/algorithmsCreation';

Meteor.startup(() => {
  createAlgorithms();
});
