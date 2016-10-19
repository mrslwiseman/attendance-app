import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AttendanceApp from '/imports/ui/layouts/AttendanceApp.js';
import NotFoundPage from '/imports/ui/pages/NotFoundPage.js';
import HomePage from '/imports/ui/pages/HomePage.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
      <Route path="/" component={AttendanceApp}/>
      <Route path="*" component={NotFoundPage}/>
  </Router>
);