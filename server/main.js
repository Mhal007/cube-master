import { Meteor } from 'meteor/meteor';

import {createAlgorithms} from './AlgorithmsCreation';

Meteor.startup(() => {
    if (Meteor.absoluteUrl().indexOf('localhost') === -1) {
        UniConfig.private.runOnce('createAlgorithms', createAlgorithms);
        UniConfig.private.runOnce('createAlgorithms', createAlgorithms);
    }
});
