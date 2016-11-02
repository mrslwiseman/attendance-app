import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AttendanceApp from '/imports/ui/layouts/AttendanceApp.js';
import PageNotFound from '/imports/ui/pages/PageNotFound.js';
import HomePage from '/imports/ui/pages/HomePage.js';
import AddVolunteer from '/imports/ui/containers/AddVolunteerContainer.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
      <Route path="/" component={AttendanceApp}/>
      <Route path="/addvolunteer" component={AddVolunteer}/>
      <Route path="*" component={PageNotFound}/>
  </Router>
);
