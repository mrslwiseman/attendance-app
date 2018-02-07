import { Meteor } from 'meteor/meteor';
import mcPeople from '/imports/collections/mcPeople';
import mcAttendances from '/imports/collections/mcAttendances';
import * as sg from 'sugar';              // sugar utility

// Pubs of People data
Meteor.publish('everyone', function() {
  return mcPeople.find({}, { sort: { pplLastAtn: 1, pplSurname: 1 } });
});

Meteor.publish("ready.for.checkin", function () {
  return mcPeople.find({pplLastAtn: {$ne: sg.Date.create('today')}}, { sort: { pplLastAtn: -1, pplSurname: 1 }} );
});

Meteor.publish("checked.in", function () {
  return mcPeople.find({pplLastAtn: {$eq: sg.Date.create('today')}} , { sort: { pplLastAtn: -1, pplSurname: 1 }} );
});

// Pubs of Attendance data
Meteor.publish("all.attendances", function () {
  return mcAttendances.find({}, { sort: { atnDate: 0, pplSurname: 1 }} );
});

Meteor.publish("volunteers", function(search) {

  let query = {},
  projection = {limit: 10, sort: {pplName: 1}};
  
  if(search){
    let regex = new RegExp(search, 'i');

    query = {
      $or: [
        {pplName: regex},
        {pplSurname: regex}
      ]
    };

    projection.limit = 100;
  }

  return volunteer.find(query, projection)
  
});
