import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Container from '../components/container.js';
import 'rc-slider/assets/index.css';

Meteor.startup(() => {
  render(<Container />, document.getElementById('render-target'));
});

// TODO menu with buttons for: accept, +2, random new, delete
// TODO remove reducible moves from scrambles
// TODO visual scramble !
// TODO add router and paths
// TODO add account support
// TODO create custom images for algs (better res as well)
// TODO Refactor algs naming and order
// TODO refactor timer & nr of renders
// TODO isTraining refactor (the 'real' flag)
// TODO refactoring of isAlgorithmActive (DB -> local storage)
// TODO sets of algs kept in DB to load selection?
// TODO results result format (ms / s / m / h)

// TODO Blindfolded + 1/2 + scrambler
// TODO DNF option
// TODO 3x3x3 working + scrambler
// TODO mobile view
// TODO new averages
// TODO +x/-x to average (green/red)
// TODO responsive view (UWHD)
