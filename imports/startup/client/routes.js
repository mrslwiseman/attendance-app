import React from 'react';

import { render } from 'react-dom';
// Import routing components
import { BrowserRouter, HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

// route components
import AttendanceApp from '/imports/ui/layouts/AttendanceApp.js';
import PageNotFound from '/imports/ui/pages/PageNotFound.js';
import HomePage from '/imports/ui/pages/HomePage.js';

export const renderRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AttendanceApp}/>
      <Route path="*" component={PageNotFound}/>
    </Switch>
  </BrowserRouter>
);

  // <Router history={browserHistory}>
  //     <Route path="/" component={AttendanceApp}/>
  //     <Route path="*" component={PageNotFound}/>
  // </Router>
