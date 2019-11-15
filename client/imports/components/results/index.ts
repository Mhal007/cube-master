import { Meteor } from 'meteor/meteor';

import { Results } from '../../../../collections/results';
import { composer } from '../../lib/composer';
import ResultsComponent from './results';
import { result } from '../../../../lib/types';

const compose = (props: any, onData: any): void => {
  const subscriptions = [Meteor.subscribe('results')];

  if (subscriptions.every(subscription => subscription.ready())) {
    // @ts-ignore
    const results: result[] = Results.find({}).fetch();
    onData(null, { results });
  }
};

export default composer(compose)(ResultsComponent);
