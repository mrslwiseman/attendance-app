import React, { PropTypes } from 'react';
import CheckinContainer from '../containers/CheckinContainer';
import CheckedInContainer from '../containers/CheckedInContainer';

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
          <td style={{verticalAlign: 'top'}}><CheckinContainer/></td>
          <td style={{verticalAlign: 'top'}}><CheckedInContainer/></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default AttendanceApp;
