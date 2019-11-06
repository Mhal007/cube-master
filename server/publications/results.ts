import { Meteor } from 'meteor/meteor';
import { Results } from '/collections/results';

// TODO Only publish algorithms that are public or belong to the current user
Meteor.publish('results', () => Results.find());
