let Meteor;module.link('meteor/meteor',{Meteor(v){Meteor=v}},0);let Results;module.link('/collections/results',{Results(v){Results=v}},1);let composer;module.link('../../lib/composer',{composer(v){composer=v}},2);let ResultsComponent;module.link('./results',{default(v){ResultsComponent=v}},3);





const compose = (props, onData) => {
  const subscriptions = [Meteor.subscribe('results')];

  if (subscriptions.every(subscription => subscription.ready())) {
    const results = Results.find({}).fetch();
    onData(null, { results });
  }
};

module.exportDefault(composer(compose)(ResultsComponent));
