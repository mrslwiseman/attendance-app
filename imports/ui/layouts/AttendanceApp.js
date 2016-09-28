import React, { PropTypes } from 'react';
import CheckInPool from '../containers/CheckInPool';
import CheckedIn from '../containers/CheckedIn';

function AttendanceApp() {
  return (
    <div>
    <h1>Back2Bikes Attendance App</h1>
    <table>
      <tbody>
        <tr>
          <th>Ready for Check In</th>
          <th>Checked In</th>
        </tr>
        <tr>
          <td style={{verticalAlign: 'top'}}><CheckInPool/></td>
          <td style={{verticalAlign: 'top'}}><CheckedIn/></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default AttendanceApp;
