import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { expect } from 'chai';

export const Algorithms = new Mongo.Collection('algorithms');

Meteor.methods({
  'algorithms.toggleActive': (algId, active) => {
    check(active, Boolean);
    check(algId, String);

    Algorithms.update(algId, { $set: { active } });
  },
  'algorithms.activateAll': category => {
    Algorithms.update(
      { category },
      { $set: { active: true } },
      { multi: true }
    );
  },
  'algorithms.deactivateAll': category => {
    Algorithms.update(
      { category },
      { $set: { active: false } },
      { multi: true }
    );
  },
  'algorithms.insert': ({
    category,
    image,
    scramble,
    solution,
    subtype,
    type
  }) => {
    expect(category).to.be.a('string');
    expect(image).to.be.a('string');
    expect(scramble).to.be.a('string');
    expect(solution).to.be.a('string');
    expect(subtype).to.be.a('string');
    expect(type).to.be.a('string');

    // Make sure the user is logged in before inserting a algorithm
    /* if (! Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
     }*/

    Algorithms.insert({
      createdAt: new Date(),
      category,
      image,
      scramble,
      solution,
      subtype,
      type
    });
  },
  'algorithms.search'(text) {
    check(text, String);

    return Algorithms.find();
  },
  'algorithms.remove'(algorithmId) {
    check(algorithmId, String);

    /*const algorithm = Algorithms.findOne(algorithmId);
    if (algorithm.private && algorithm.owner !== Meteor.userId()) {
      // If the algorithm is private, make sure only the owner can delete it
          throw new Meteor.Error('not-authorized');
    }*/

    Algorithms.remove(algorithmId);
  } /*,
    'algorithms.setChecked'(algorithmId, setChecked) {
        check(algorithmId, String);
        check(setChecked, Boolean);

        const algorithm = Algorithms.findOne(algorithmId);
        if (algorithm.private && algorithm.owner !== Meteor.userId()) {
              // If the algorithm is private, make sure only the owner can check it off
                  throw new Meteor.Error('not-authorized');
            }

        Algorithms.update(algorithmId, { $set: { checked: setChecked } });
    },
    'algorithms.setPrivate'(algorithmId, setToPrivate) {
        check(algorithmId, String);
        check(setToPrivate, Boolean);

        const algorithm = Algorithms.findOne(algorithmId);

        // Make sure only the algorithm owner can make a algorithm private
        if (algorithm.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Algorithms.update(algorithmId, { $set: { private: setToPrivate } });
    },*/
});
