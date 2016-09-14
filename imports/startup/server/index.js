import '/imports/startup/server';
import People from '/imports/collections/people';
import Attendances from '/imports/collections/attendances'

import { Meteor } from 'meteor/meteor'; // base
import sugar from 'sugar';              // sugar utility
import lodash from 'lodash';            // another utility library
// import casual from 'casual';            // casual random data generator

Meteor.startup(() => {
  // code to run on server at startup
  if (People.find().count() === 0) {
    var dftDate = sugar.Date.create('yesterday');
    var u = [
      {n: "Joseph",s: "Szili", lad: dftDate },
      {n: "Mikkel",s: "King", lad: dftDate }
    ];

    _.each(u, function(p) {
      
      var pID =
        People.insert({
          pplName: p.n,
          pplSurname: p.s,
          pplLastAtn: p.lad
        });
      
      Attendances.insert({
        atnPersonID: pID,
        atnName: p.n,
        atnSurname: p.s,
        atnDate: p.lad,
        atnHours: 6
      });  
    });
  };
});
