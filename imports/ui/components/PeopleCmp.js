import React, { PropTypes } from 'react';
import PeopleAdd from './PeopleAdd';
import PeopleList from './PeopleList';

function PeopleCmp(props) {
  const {
    loading, 
    items, 
    onSubmit, 
    onRemove, 
  } = props;

  return (
    <div>
      <PeopleAdd onSubmit={onSubmit} />
      <PeopleList
        loading={loading}
        items={items}
        onRemove={onRemove}
      />
    </div>
  );
}

PeopleCmp.propTypes = {
  loading: PropTypes.bool.isRequired, 
  items: PropTypes.array.isRequired, 
  onSubmit: PropTypes.func.isRequired, 
  onRemove: PropTypes.func.isRequired
};

export default PeopleCmp;
