import { RouteComponentProps } from '@reach/router';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';

import { Results as ResultsCollection } from '../../../../collections/results';
import { Result } from '../../../../lib/types';
import { Results } from './results';

type Props = RouteComponentProps & {
  demo: boolean;
};

const ResultsContainer = ({ demo }: Props): JSX.Element => {
  const { loading, results } = useTracker(() => {
    const subscriptions = [Meteor.subscribe('results')];
    const results: Result[] = ResultsCollection.find({
      userId: demo ? 'demo' : Meteor.userId() ?? undefined,
    }).fetch();

    return {
      loading: subscriptions.some(subscription => !subscription.ready()),
      results,
    };
  }, []);

  return <Results loading={loading} results={results} />;
};

export default ResultsContainer;
