import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import PeopleContainer from '/imports/ui/containers/PeopleCon.js';
import NotFoundPage from '/imports/ui/pages/NotFoundPage.js';
import HomePage from '/imports/ui/pages/HomePage.js';

export const renderRoutes = () => (
  <Router history={browserHistory}>
      <Route path="/" component={HomePage}/>
      <Route path="/volunteers" component={PeopleContainer}/>
      <Route path="*" component={NotFoundPage}/>
  </Router>
);