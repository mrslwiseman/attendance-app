import React, { PropTypes } from 'react';

function PeopleItem(props) {
  const {
    _id,
    name,
    surname,
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
};

export default PeopleItem;
