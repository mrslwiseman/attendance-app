import React, { PropTypes } from 'react';
import Avatar from './Avatar';


class CheckinList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (
        <p>Loading...</p>
      );
    }

    if (this.props.ppl.length === 0) {
      return (
        <p>Nobody can check in!</p>
      );
    }

    const isCheckedIn = false;
    return (
      <div>
        {this.props.ppl.map(({ _id, pplName, pplSurname, pplAvatar }) => (
          <div key={_id} onClick={() => this.props.recordAttendance(_id)} >
            <Avatar
              _id={_id}
              isCheckedin={isCheckedIn}
              fileName={pplAvatar}
            />
            <br></br>
            {pplName} {pplSurname}
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

CheckinList.propTypes = {
  loading: PropTypes.bool.isRequired,
  ppl: PropTypes.array.isRequired, 
  recordAttendance: PropTypes.func.isRequired
};

export default CheckinList;