import React, { PropTypes } from 'react';

function PeopleItem(props) {
  const {
    _id,
    name,
    surname,
    /*
    isVol,
    isSup,
    isAdmin,
    lastAtn,
    */
  } = props;

  return (
    <li>
      {name} {surname} 
    </li>
  );
}

PeopleItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  /*
  isVol: PropTypes.boolean.isRequired,
  isSup: PropTypes.boolean.isRequired,
  isAdmin: PropTypes.boolean.isRequired,
  lastAtn: PropTypes.date.isRequired,
  */
};

export default PeopleItem;
