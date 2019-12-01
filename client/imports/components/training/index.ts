import { Meteor } from 'meteor/meteor';
import { RouteComponentProps } from '@reach/router';

import { Algorithms } from '../../../../collections/algorithms';
import { Results } from '../../../../collections/results';
import { composer } from '../../lib/composer';
import { algorithm, category, result } from '../../../../lib/types';
import { categories } from '../../../../lib/const';
import Training from './training';

type Props = RouteComponentProps & {
  demo?: boolean;
};

export type algorithmWithResults = algorithm & {
  results: number[];
};

export type categoryWithResults = category & {
  results: number[];
};

const compose = (props: Props, onData: Function): void => {
  const subscriptions = [
    Meteor.subscribe('algorithms'),
    Meteor.subscribe('results')
  ];

  if (subscriptions.every(subscription => subscription.ready())) {
    // @ts-ignore
    const algorithms: algorithm[] = Algorithms.find({}).fetch();
    // @ts-ignore
    const results: result[] = Results.find({}).fetch();

    const algorithmsWithResults: algorithmWithResults[] = algorithms.map(
      algorithm => ({
        ...algorithm,
        results: results
          .filter(result => result.algorithmId === algorithm._id)
          .map(result => result.time)
      })
    );

    const categoriesWithResults: categoryWithResults[] = categories.map(
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
