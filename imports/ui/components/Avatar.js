import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

Avatar.propTypes = {
  _id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  isCheckedin: PropTypes.bool.isRequired
};

function Avatar(props) {
  const {
    _id,
    firstName,
    lastName,
    fileName,
    isCheckedin
  } = props;

  let borderColour = isCheckedin ? 'LimeGreen' : 'grey';
  return (
    <div className={'raised item'} key={_id} >
      <img
          className={'ui avatar image tiny'}         
          src={"/images/avatars/" + fileName}
          style={{border: '5px solid ' + borderColour }} 
          >
      </img>
      <div className={'middle aligned content'}>
        <b className={'header'}>{firstName} {lastName}</b>
      </div>
    </div>
  );
}

export default Avatar;