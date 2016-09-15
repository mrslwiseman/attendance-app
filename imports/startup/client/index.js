import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
// import HelloWorld from '/imports/ui/components/HelloWorld';
import PeopleCmp from '/imports/ui/components/PeopleCmp';
import PeopleContainer from '/imports/ui/containers/People';
import './routes';
/*
Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById('app'));
});
*/

Meteor.startup(() => 
  render(<PeopleCmp />, document.getElementById('app'))
);