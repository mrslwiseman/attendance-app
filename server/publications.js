import { Meteor } from 'meteor/meteor';
import mcPeople from '/imports/collections/mcPeople';
import mcAttendances from '/imports/collections/mcAttendances';
import * as sg from 'sugar';              // sugar utility

// Pubs of People data
Meteor.publish('everyone', function() {
  return mcPeople.find({}, { sort: { pplLastAtn: 1, pplSurname: 1 } });
});

Meteor.publish("ready.for.checkin", function () {
  return mcAttendances.find({pplLastAtn: {$ne: sg.Date.create('today')}}, { sort: { atnDate: 0, pplSurname: 1 }} );
});

Meteor.publish("checked.in", function () {
  return mcAttendances.find({pplLastAtn: {$eq: sg.Date.create('today')}} , { sort: { atnDate: 0, pplSurname: 1 }} );
});

// Pubs of Attendance data
Meteor.publish("all.attendances", function () {
  return mcAttendances.find({}, { sort: { atnDate: 0, pplSurname: 1 }} );
});
