import React, { PropTypes } from 'react';
import PeopleItem from './PeopleItem';

function PeopleList(props) {
  const {
    loading,
    items,
    onRemove,
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
      {items.map(({ _id, pplName, pplSurname }) => (
        <PeopleItem
          _id={_id}
          key={_id}
          name={pplName}
          surname={pplSurname}
        />
      ))}
    </ul>
  );
}

PeopleList.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired, 
};

export default PeopleList;