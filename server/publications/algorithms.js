"use strict";

var _meteor = require("meteor/meteor");

var _algorithms = require("../../collections/algorithms");

// TODO Only publish algorithms that are public or belong to the current user
_meteor.Meteor.publish('algorithms', function () {
  return _algorithms.Algorithms.find();
});