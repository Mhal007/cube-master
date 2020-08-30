import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Result } from '../lib/types';
export const Results = new Mongo.Collection<Result>('results');

// Allow not logged-in users to manage results in the 'demo' mode
Results.allow({
  insert: (userId: string, doc: any) => !!userId || doc.userId === 'demo',
  update: (userId: string, doc: any) => !!userId || doc.userId === 'demo',
  remove: (userId: string, doc: any) => !!userId || doc.userId === 'demo',
});

Meteor.methods({
  'results.insert'({ algorithmId, category, scramble, time }: Result) {
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
      userId: this.userId || 'demo',
    };

    Results.insert(doc);
  },
  'results.remove'(resultId) {
    check(resultId, String);

    Results.remove({ _id: resultId, userId: this.userId || 'demo' });
  },
  async 'results.setFoul'(resultId, newFoul) {
    check(resultId, String);

    const selector = { _id: resultId, userId: this.userId || 'demo' };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const currentResult: Result = await Results.findOne(selector);

    if (!currentResult) {
      throw new Meteor.Error(
        'results.setFoul.currentResult',
        'Result not found',
      );
    }

    const timeToBeAdded = newFoul
      ? !currentResult.foul
        ? 2000
        : 0
      : currentResult.foul
      ? -2000
      : 0;

    Results.update(resultId, {
      $set: { foul: newFoul, time: currentResult.time + timeToBeAdded },
    });
  },
});
