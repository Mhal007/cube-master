import { Meteor } from 'meteor/meteor';
import { Algorithms } from '../../collections/algorithms';

Meteor.publish('algorithms', function getAlgorithms() {
  const userId = this.userId;
  if (!userId) {
    return this.ready();
  }

  return Algorithms.find();
});
