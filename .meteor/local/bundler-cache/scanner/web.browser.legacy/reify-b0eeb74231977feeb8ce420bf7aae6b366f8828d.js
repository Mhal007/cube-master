var Meteor;module.link('meteor/meteor',{Meteor:function(v){Meteor=v}},0);var Algorithms;module.link('../../../collections/algorithms',{Algorithms:function(v){Algorithms=v}},1);var Results;module.link('../../../collections/results',{Results:function(v){Results=v}},2);var composer;module.link('../../lib/composer',{composer:function(v){composer=v}},3);var Training;module.link('./training',{default:function(v){Training=v}},4);






// TODO move it
const categories = [
  {
    label: 'OLL',
    value: 'OLL',
    randomizableAlgorithm: true
  },
  {
    label: 'PLL',
    value: 'PLL',
    randomizableAlgorithm: true
  },
  {
    label: '3x3x3',
    value: '3x3x3',
    randomizableScramble: true
  },
  {
    label: 'OLL Attack',
    value: 'OLL-attack',
    algorithmsCategory: 'OLL',
    settingsDisabled: true
  },
  {
    label: 'PLL Attack',
    value: 'PLL-attack',
    algorithmsCategory: 'PLL',
    settingsDisabled: true
  }
];

const compose = (props, onData) => {
  const subscriptions = [
    Meteor.subscribe('algorithms'),
    Meteor.subscribe('results')
  ];

  if (subscriptions.every(subscription => subscription.ready())) {
    const algorithms = Algorithms.find({}).fetch();
    const results = Results.find({}).fetch();

    results.forEach(result => {
      const algorithm = algorithms.find(alg => alg._id === result.algorithmId);
      const category = categories.find(cat => cat.value === result.category);
      if (algorithm) {
        algorithm.results = (algorithm.results || []).concat(result.time);
      }
      if (category) {
        category.results = (category.results || []).concat(result.time);
      }
    });

    onData(null, { algorithms, categories });
  }
};

module.exportDefault(composer(compose)(Training));
