import { Meteor } from 'meteor/meteor';
import { Algorithms } from '../../collections/algorithms';

// TODO Only publish algorithms that are public or belong to the current user
Meteor.publish('algorithms', () => Algorithms.find());
