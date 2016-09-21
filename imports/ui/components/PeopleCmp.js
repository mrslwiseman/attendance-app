import React, { PropTypes } from 'react';
import PeopleAdd from './PeopleAdd';
import PeopleList from './PeopleList';

function PeopleCmp(props) {
  const {
    loading, 
    people, 
    onSubmit, 
    onRemove, 
  } = props;

  return (
    <div>
      <PeopleAdd onSubmit={onSubmit} />
      <PeopleList
        loading={loading}
        items={people}
        onRemove={onRemove}
      />
    </div>
  );
}

PeopleCmp.propTypes = {
  loading: PropTypes.bool.isRequired, 
  people: PropTypes.array.isRequired, 
  onSubmit: PropTypes.func.isRequired, 
  onRemove: PropTypes.func.isRequired
};

export default PeopleCmp;
