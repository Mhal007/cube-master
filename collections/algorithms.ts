import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Algorithms = new Mongo.Collection('algorithms');

Meteor.methods({
  'algorithms.toggleActive'(algId, active) {
    check(this.userId, String);
    check(active, Boolean);
    check(algId, String);

    Algorithms.update(algId, { $set: { active } });
  },
  'algorithms.activateAll'(category) {
    check(this.userId, String);
    check(category, String);

    Algorithms.update(
      { category },
      { $set: { active: true } },
      { multi: true }
    );
  },
  'algorithms.deactivateAll'(category) {
    check(this.userId, String);
    check(category, String);

    Algorithms.update(
      { category },
      { $set: { active: false } },
      { multi: true }
    );
  },
  'algorithms.insert'({ category, image, scramble, solution, subtype, type }) {
    check(this.userId, String);
    check(category, String);
    check(image, String);
    check(scramble, String);
    check(solution, String);
    check(subtype, String);
    check(type, String);

    const doc = {
      createdAt: new Date(),
      category,
      image,
      scramble,
      solution,
      subtype,
      type
    };

    Algorithms.insert(doc);
  },
  'algorithms.search'(text) {
    check(this.userId, String);
    check(text, String);

    return Algorithms.find();
  },
  'algorithms.remove'(algorithmId) {
    check(this.userId, String);
    check(algorithmId, String);

    Algorithms.remove(algorithmId);
  }
});
