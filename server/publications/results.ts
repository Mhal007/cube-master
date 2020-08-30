import { Meteor } from 'meteor/meteor';

import { Results } from '../../collections/results';

Meteor.publish('results', function getResults() {
  return Results.find({ userId: this.userId || 'demo' });
});
