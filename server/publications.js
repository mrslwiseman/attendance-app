import { Meteor } from 'meteor/meteor';
import People from '/imports/collections/people';
import Attendances from '/imports/collections/attendances';
import * as sg from 'sugar';              // sugar utility

// Pubs of People data
Meteor.publish('everyone', function() {
  return People.find({}, { sort: { pplLastAtn: 1, pplSurname: 1 } });
});

Meteor.publish("ready.for.checkin", function () {
  return Attendances.find({pplLastAtn: {$ne: sg.Date.create('today')}}, { sort: { atnDate: 0, pplSurname: 1 }} );
});

Meteor.publish("checked.in", function () {
  return Attendances.find({pplLastAtn: {$eq: sg.Date.create('today')}} , { sort: { atnDate: 0, pplSurname: 1 }} );
});

// Pubs of Attendance data
Meteor.publish("all.attendances", function () {
  return Attendances.find({}, { sort: { atnDate: 0, pplSurname: 1 }} );
});
