var Meteor;module.link('meteor/meteor',{Meteor:function(v){Meteor=v}},0);var Results;module.link('/collections/results',{Results:function(v){Results=v}},1);var composer;module.link('../../lib/composer',{composer:function(v){composer=v}},2);var ResultsComponent;module.link('./results',{default:function(v){ResultsComponent=v}},3);





const compose = (props, onData) => {
  const subscriptions = [Meteor.subscribe('results')];

  if (subscriptions.every(subscription => subscription.ready())) {
    const results = Results.find({}).fetch();
    onData(null, { results });
  }
};

module.exportDefault(composer(compose)(ResultsComponent));
