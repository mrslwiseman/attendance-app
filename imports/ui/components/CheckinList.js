import React, { PropTypes } from 'react';
import Avatar from './Avatar';


CheckinList.propTypes = {
  loading: PropTypes.bool.isRequired,
  ppl: PropTypes.array.isRequired, 
};

function CheckinList(props) {
  const {
    loading,
    ppl,
  } = props;

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (ppl.length === 0) {
    return (
      <p>Nobody can check in!</p>
    );
  }

  const isCheckedIn = false;
  return (
    <div>
      {ppl.map(({ _id, pplName, pplSurname, pplAvatar }) => (
        <div key={_id}>
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

export default CheckinList;