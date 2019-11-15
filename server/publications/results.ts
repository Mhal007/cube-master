import { Meteor } from 'meteor/meteor';
import { Results } from '../../collections/results';

Meteor.publish('results', function getResults() {
  const userId = this.userId;
  if (!userId) {
    return this.ready();
  }

  return Results.find({ userId });
});
