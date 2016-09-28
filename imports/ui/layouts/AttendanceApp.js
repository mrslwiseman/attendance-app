import React, { PropTypes } from 'react';
import CheckInPool from '../containers/CheckInPool';
import CheckedIn from '../containers/CheckedIn';

function AttendanceApp() {
  return (
    <div>
    <h1>Checked In</h1> <CheckedIn/>
    <h1>CheckIn Pool</h1> <CheckInPool/>
    </div>
  );
}

export default AttendanceApp;
