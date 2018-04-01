import { Meteor } from 'meteor/meteor';
import {Links} from '../../imports/collections/links'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links_publication', function(){  //made the publication, now make the subscription
    return Links.find({});
  })
});
