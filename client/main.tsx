import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Router from './imports/components/router';

import 'rc-slider/assets/index.css';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

Meteor.startup(() => {
  render(<Router />, document.getElementById('render-target'));
});
