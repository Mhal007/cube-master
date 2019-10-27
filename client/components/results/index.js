import { Meteor } from 'meteor/meteor';

import { Results } from '../../../collections/results';
import { composer } from '../../lib/composer';
import ResultsComponent from './results';

const compose = (props, onData) => {
  const subscriptions = [Meteor.subscribe('results')];

  if (subscriptions.every(subscription => subscription.ready())) {
    const results = Results.find({}).fetch();
    onData(null, { results });
  }
};

export default composer(compose)(ResultsComponent);
