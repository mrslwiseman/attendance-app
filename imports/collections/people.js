/* global ValidatedMethod replaces>matb33:collection-hooks, 
   SimpleSchema */

import { Mongo } from 'meteor/mongo';
import * as sg from 'sugar';              // sugar utility

const People = new Mongo.Collection('people');

People.attachSchema(new SimpleSchema({
  pplID: {
    type: String,
    label: "Person ID",
    max: 15,
    optional: true
  },
  pplName: {
    type: String,
    label: "Name",
    max: 128,
    optional: false
  },
  pplSurname: {
    type: String,
    label: "Surname",
    max: 128,
    optional: false
  },
  pplIsVol: {
    type: Boolean,
    label: "Is a volunteer",
    defaultValue: true,
		optional: true
  },
  pplIsSuper: {
    type: Boolean,
    label: "Is a supervisor",
    defaultValue: false,
		optional: true
  },
  pplIsAdmin: {
    type: Boolean,
    label: "Is a sysADMIN",
    defaultValue: false,
		optional: true
  },
  pplLastAtn: {
    type: Date,
    label: "Last Attended Date",
    optional: false
  },
}));

const insert = new ValidatedMethod({
  name: 'people.insert',
  validate: new SimpleSchema({
    pplName: { type: String },
    pplSurname: { type: String },
  }).validator(),
  run({ pplName, pplSurname }) {
    Items.insert({
      pplName,
      pplSurname,
      pplLastAtn: sg.Date.create('yesterday'),
    });
  },
});

const remove = new ValidatedMethod({
  name: 'people.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    People.remove(_id);
  },
});

export default People;