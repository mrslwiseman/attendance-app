import React, { PropTypes } from 'react';
import PeopleItem from './PeopleItem';

function PeopleList(props) {
  const {
    loading,
    items,
  } = props;

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (items.length === 0) {
    return (
      <p>No Items</p>
    );
  }

  return (
    <ul>
      {items.map(({ _id, text, isChecked }) => (
        <Item
          _id={_id}
          key={_id}
          text={text}
        />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};

export default PeopleList;
