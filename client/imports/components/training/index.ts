import { Meteor } from 'meteor/meteor';
import { RouteComponentProps } from '@reach/router';

import { Algorithms } from '../../../../collections/algorithms';
import { Results } from '../../../../collections/results';
import { composer } from '../../lib/composer';
import { Algorithm, Category, Result } from '../../../../lib/types';
import { categories } from '../../../../lib/const';
import Training from './training';

type Props = RouteComponentProps & {
  demo?: boolean;
};

export type AlgorithmWithResults = Algorithm & {
  results: number[];
};

export type CategoryWithResults = Category & {
  results: number[];
};

const compose = (props: Props, onData: Function): void => {
  const subscriptions = [
    Meteor.subscribe('algorithms'),
    Meteor.subscribe('results')
  ];

  if (subscriptions.every(subscription => subscription.ready())) {
    const algorithms = Algorithms.find({}).fetch() as Algorithm[];
    const results = Results.find({}).fetch() as Result[];

    const algorithmsWithResults: AlgorithmWithResults[] = algorithms.map(
      algorithm => ({
        ...algorithm,
        results: results
          .filter(result => result.algorithmId === algorithm._id)
          .map(result => result.time)
      })
    );

    const categoriesWithResults: CategoryWithResults[] = categories.map(
      category => ({
        ...category,
        results: results
          .filter(result => result.category === category.value)
          .map(result => result.time)
      })
    );

    onData(null, {
      algorithms: algorithmsWithResults,
      categories: categoriesWithResults
    });
  }
};

export default composer(compose)(Training);
