import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

Avatar.propTypes = {
  _id: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  isCheckedin: PropTypes.bool.isRequired
};

function Avatar(props) {
  const {
    _id,
    fileName,
    isCheckedin
  } = props;

  let borderColour = isCheckedin ? 'LimeGreen' : 'black';
  return (
    <img key={_id} src={"/images/avatars/" + fileName} width="100" height="100" 
      style={{border: '5px solid ' + borderColour }}>
    </img>
  );
}

export default Avatar;