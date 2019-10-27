import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Container from './components/container.js';

import 'rc-slider/assets/index.css';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

Meteor.startup(() => {
  render(<Container />, document.getElementById('render-target'));
});

