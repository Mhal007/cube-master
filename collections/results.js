import {Meteor} from 'meteor/meteor';
import {Mongo}  from 'meteor/mongo';
import {check}  from 'meteor/check';

export const Results = new Mongo.Collection('results');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish results that are public or belong to the current user
    Meteor.publish('results', function resultsPublication() {
        return Results.find();
    });
}

Meteor.methods({
    'results.insert'({
        category,
        image,
        real,
        ref,
        scramble,
        solution,
        time,
        type
    }) {
        check(category, String);
        check(real    , Boolean);
        check(time    , Number);

        if (category === 'OLL' || category === 'PLL' || category === '3x3x3') {
            check(scramble, String);
        }

        if (category === 'OLL' || category === 'PLL') {
            check(image   , String);
            check(solution, String);
            check(ref     , Number);
            check(type    , String);
        }

        // Make sure the user is logged in before inserting a result
        /* if (! Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
         }*/

        Results.insert({
            category,
            createdAt: new Date(),
            image,
            real,
            ref,
            scramble,
            solution,
            time,
            type
        });
    },
    'results.search'(text) {
        check(text, String);

        return Results.find();
    },
    'results.remove'(resultId) {
        check(resultId, String);

        /*const result = Results.findOne(resultId);
         if (result.private && result.owner !== Meteor.userId()) {
         // If the result is private, make sure only the owner can delete it
         throw new Meteor.Error('not-authorized');
         }*/

        Results.remove(resultId);
    }
});