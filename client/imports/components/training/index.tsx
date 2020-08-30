import { RouteComponentProps } from '@reach/router';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';

import { Algorithms } from '../../../../collections/algorithms';
import { Results } from '../../../../collections/results';
import { categories } from '../../../../lib/const';
import {
  Algorithm,
  AlgorithmWithResults,
  CategoryWithResults,
  Result,
} from '../../../../lib/types';
import { Training } from './training';

type Props = RouteComponentProps;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TrainingContainer = (props: Props): JSX.Element => {
  const {
    loading,
    algorithmsWithResults,
    categoriesWithResults,
  } = useTracker(() => {
    const subscriptions = [
      Meteor.subscribe('algorithms'),
      Meteor.subscribe('results'),
    ];

    const algorithms = Algorithms.find({}).fetch() as Algorithm[];
    const results = Results.find({}).fetch() as Result[];

    const algorithmsWithResults: AlgorithmWithResults[] = algorithms.map(
      algorithm => ({
        ...algorithm,
        results: results
          .filter(result => result.algorithmId === algorithm._id)
          .map(result => result.time),
      }),
    );

    const categoriesWithResults: CategoryWithResults[] = categories.map(
      category => ({
        ...category,
        results: results
          .filter(result => result.category === category.value)
          .map(result => result.time),
      }),
    );

    return {
      loading: subscriptions.some(subscription => !subscription.ready()),
      algorithmsWithResults,
      categoriesWithResults,
    };
  }, []);

  return (
    <Training
      loading={loading}
      algorithms={algorithmsWithResults}
      categories={categoriesWithResults}
    />
  );
};

export default TrainingContainer;
