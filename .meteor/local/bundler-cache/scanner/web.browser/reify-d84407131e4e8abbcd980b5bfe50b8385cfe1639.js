module.export({Results:()=>Results},true);let Meteor;module.link('meteor/meteor',{Meteor(v){Meteor=v}},0);let Mongo;module.link('meteor/mongo',{Mongo(v){Mongo=v}},1);let check;module.link('meteor/check',{check(v){check=v}},2);



const Results = new Mongo.Collection('results');

Meteor.methods({
  'results.insert': ({ algorithmId, category, real, scramble, time }) => {
    check(category, String);
    check(real, Boolean);
    check(time, Number);

    if (category === 'OLL' || category === 'PLL' || category === '3x3x3') {
      check(scramble, String);
    }

    if (category === 'OLL' || category === 'PLL') {
      check(algorithmId, String);
    }

    // Make sure the user is logged in before inserting a result
    /* if (! Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
     }*/

    const doc = {
      algorithmId,
      category,
      createdAt: new Date(),
      real,
      scramble,
      time
    };

    Results.insert(doc);
  },
  'results.search': text => {
    check(text, String);

    return Results.find();
  },
  'results.remove': resultId => {
    check(resultId, String);

    /*const result = Results.findOne(resultId);
     if (result.private && result.owner !== Meteor.userId()) {
     // If the result is private, make sure only the owner can delete it
     throw new Meteor.Error('not-authorized');
     }*/

    Results.remove(resultId);
  }
});
