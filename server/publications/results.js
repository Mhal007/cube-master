"use strict";

var _meteor = require("meteor/meteor");

var _results = require("../../collections/results");

// TODO Only publish algorithms that are public or belong to the current user
_meteor.Meteor.publish('results', function () {
  return _results.Results.find();
});