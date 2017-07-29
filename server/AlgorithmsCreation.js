import {Algorithms} from '../collections/algorithms.js';
import {Results}    from '../collections/results.js';

import {OLL} from './const';
/*import {PLL} from './const';*/

export const createAlgorithms = () => {
    const isOLL = !!Algorithms.some({category: 'OLL'});
    const isPLL = !!Algorithms.some({category: 'PLL'});

    !isOLL && OLL.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));
    /*!isPLL && PLL.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));*/
};
