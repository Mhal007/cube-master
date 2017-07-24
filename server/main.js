import { Meteor } from 'meteor/meteor';

import createAlgorithms from './AlgorithmsCreation';

Meteor.startup(() => {
    if (Meteor.absoluteUrl().indexOf('localhost') === -1) {
        console.log(createAlgorithms);
        UniConfig.private.runOnce('createAlgorithms000', createAlgorithms);
    }
});
