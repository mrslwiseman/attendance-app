import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


Avatar.propTypes = {
  _id: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  lastAttended: PropTypes.string.isRequired
};

function Avatar(props) {
  const {
    _id,
    fileName,
    lastAttended
  } = props;

  return (
      <img key={_id} src={"/images/avatars/" + fileName} width="100" height="100" 
        >
      </img>
  );
}

export default Avatar;
