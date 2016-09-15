import React, { PropTypes } from 'react';
import PeopleAdd from './PeopleAdd';
import PeopleList from './PeopleList';

function PeopleCmp(props) {
  const {
  } = props;

  return (
    <div>
      <PeopleAdd  />
    </div>
  );
}

PeopleCmp.propTypes = {
};

export default PeopleCmp;
