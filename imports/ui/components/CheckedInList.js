import React, { PropTypes } from 'react';
import Avatar from './Avatar';

function CheckedInList(props) {
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
      <p>No one has checked in yet!</p>
    );
  }

  return (
    <div>
      {ppl.map(({ _id, pplName, pplSurname, pplAvatar, pplLastAtn }) => (
        <div key={_id}>
          <Avatar
            _id={_id}
            lastAttended={pplLastAtn}
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

CheckedInList.propTypes = {
  loading: PropTypes.bool.isRequired,
  ppl: PropTypes.array.isRequired, 
};

export default CheckedInList;