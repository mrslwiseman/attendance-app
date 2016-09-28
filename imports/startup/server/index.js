import '/imports/startup/server';
import mcPeople from '/imports/collections/mcPeople';
import mcAttendances from '/imports/collections/mcAttendances'

import { Meteor } from 'meteor/meteor'; // base
import sugar from 'sugar';              // sugar utility
import lodash from 'lodash';            // another utility library
import casual from 'casual';            // casual random data generator

Meteor.startup(() => {
  casual.seed(1066);
  // code to run on server at startup
  if (mcPeople.find().count() === 0) {
    var dftDate = sugar.Date.create('yesterday');
    var u = [
      {n: "Joseph",s: "Szili", lad: dftDate, avatar: "1.jpg"},
      {n: "Mikkel",s: "King", lad: dftDate, avatar: "2.jpg"},
    ];

    let i = 0;
    do {
      let randomInt = casual.integer(from = 1, to = 11)
      u.push({n: casual.first_name, s: casual.last_name, lad: dftDate, avatar: randomInt+".jpg"})
      ++i;
    } while (i<200)

    _.each(u, function(p) {
      
      var pID =
        mcPeople.insert({
          pplName: p.n,
          pplSurname: p.s,
          pplLastAtn: p.lad,
          pplAvatar: p.avatar
        });
      
      mcAttendances.insert({
        atnPersonID: pID,
        atnName: p.n,
        atnSurname: p.s,
        atnDate: p.lad,
        atnHours: 6
      });  
    });
  };
});
