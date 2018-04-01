import {Mongo} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

Meteor.methods({

  'links.insert': function(url){
    //validate the input
    check(url, Match.Where(url => validUrl.isUri(url))); // this will return us an error message

    const token = Math.random().toString(36).slice(-6);
    Links.insert({url: url, token:token, clicks:0});
  }
});
