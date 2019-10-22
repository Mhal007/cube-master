import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Container from '../components/Container.js';

Meteor.startup(() => {
  render(<Container />, document.getElementById('render-target'));
});
