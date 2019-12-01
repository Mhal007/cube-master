import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Results = new Mongo.Collection('results');

Meteor.methods({
  'results.insert'({ algorithmId, category, scramble, time }) {
    check(category, String);
    check(time, Number);

    if (category === 'OLL' || category === 'PLL' || category === '3x3x3') {
      check(scramble, String);
    }

    if (category === 'OLL' || category === 'PLL') {
      check(algorithmId, String);
    }

    const doc = {
      algorithmId,
      category,
      createdAt: new Date(),
      scramble,
      time,
      userId: this.userId || 'demo'
    };

    Results.insert(doc);
  },
  'results.remove'(resultId) {
    check(this.userId, String);
    check(resultId, String);

    Results.remove({ userId: this.userId, resultId });
  }
});
