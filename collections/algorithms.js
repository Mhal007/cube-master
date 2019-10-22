import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Algorithms = new Mongo.Collection('algorithms');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish algorithms that are public or belong to the current user
  Meteor.publish('algorithms', () => Algorithms.find());
}

Meteor.methods({
  'algorithms.toggleActive': (algId, active) => {
    check(active, Boolean);
    check(algId, String);

    Algorithms.update(algId, { $set: { active } });
  },
  'algorithms.activateAll': category => {
    Algorithms.update({ category }, { $set: { active: true } }); // Mongodb >= 3.2
  },
  'algorithms.deactivateAll': category => {
    Algorithms.update({ category }, { $set: { active: false } }); // Mongodb >= 3.2
  },
  'algorithms.insert': ({ category, image, scramble, solution, type }) => {
    check(category, String);
    check(image, String);
    check(scramble, String);
    check(solution, String);
    check(type, String);

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
