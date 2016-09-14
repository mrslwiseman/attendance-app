/* global ValidatedMethod replaces>matb33:collection-hooks, 
   SimpleSchema */

import { Mongo } from 'meteor/mongo';

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

export default People;