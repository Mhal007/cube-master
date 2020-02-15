import { Meteor } from 'meteor/meteor';
import { RouteComponentProps } from '@reach/router';

import { Results } from '../../../../collections/results';
import { composer } from '../../lib/composer';
import ResultsComponent from './results';
import { Result } from '../../../../lib/types';

type Props = RouteComponentProps & {
  demo?: boolean;
};

const compose = (props: Props, onData: Function): void => {
  const subscriptions = [Meteor.subscribe('results')];

  if (subscriptions.every(subscription => subscription.ready())) {
    const { demo } = props;

    // @ts-ignore
    const results: Result[] = Results.find({
      userId: demo ? 'demo' : Meteor.userId()
    }).fetch();

    onData(null, { results });
  }
};

export default composer(compose)(ResultsComponent);
