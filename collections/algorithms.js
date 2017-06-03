import {Meteor} from 'meteor/meteor';
import {Mongo}  from 'meteor/mongo';
import {check}  from 'meteor/check';

export const Algorithms = new Mongo.Collection('algorithms');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish algorithms that are public or belong to the current user
    Meteor.publish('algorithms', function algorithmsPublication() {
        console.log(Algorithms.find().fetch());
        return Algorithms.find();
    });
}

Meteor.methods({
    'algorithms.insert'(text) {
        check(text, String);

        // Make sure the user is logged in before inserting a algorithm
       /* if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }*/

        Algorithms.insert({
            createdAt: new Date(),
            scramble: "D B' R L' F",
            image: "default"
        });
    },
    'algorithms.search'(text) {
        check(text, String);

        return Algorithms.find();
    },
    'algorithms.remove'(algorithmId) {
        check(algorithmId, String);

        /*const algorithm = Algorithms.findOne(algorithmId);
        if (algorithm.private && algorithm.owner !== Meteor.userId()) {
          // If the algorithm is private, make sure only the owner can delete it
              throw new Meteor.Error('not-authorized');
        }*/

        Algorithms.remove(algorithmId);
    }/*,
    'algorithms.setChecked'(algorithmId, setChecked) {
        check(algorithmId, String);
        check(setChecked, Boolean);

        const algorithm = Algorithms.findOne(algorithmId);
        if (algorithm.private && algorithm.owner !== Meteor.userId()) {
              // If the algorithm is private, make sure only the owner can check it off
                  throw new Meteor.Error('not-authorized');
            }

        Algorithms.update(algorithmId, { $set: { checked: setChecked } });
    },
    'algorithms.setPrivate'(algorithmId, setToPrivate) {
        check(algorithmId, String);
        check(setToPrivate, Boolean);

        const algorithm = Algorithms.findOne(algorithmId);

        // Make sure only the algorithm owner can make a algorithm private
        if (algorithm.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Algorithms.update(algorithmId, { $set: { private: setToPrivate } });
    },*/
});