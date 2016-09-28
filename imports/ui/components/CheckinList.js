import React, { PropTypes } from 'react';
import Avatar from './Avatar';

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

  return (
    <ul>
      {ppl.map(({ _id, pplName, pplSurname, pplAvatar, pplLastAtn }) => (
        <li key={_id}> {pplName} {pplSurname}
          <Avatar
            _id={_id}
            lastAttended={pplLastAtn}
            fileName={pplAvatar}
          />
        </li>
      ))}
    </ul>
  );
}

CheckinList.propTypes = {
  loading: PropTypes.bool.isRequired,
  ppl: PropTypes.array.isRequired, 
};

export default CheckinList;