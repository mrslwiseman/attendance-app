import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CheckinBtn from './CheckinBtn';


function PeopleItem(props) {
  const {
    _id,
    name,
    surname,
    avatar
  } = props;

  function handleCheckin(event) {
    // event.preventDefault();
    alert("cheking logic goes here")
  }
  /*
  function onClick(event) {
    console.log(event); // => nullified object.
    alert("PING")
  }*/

  return (
    <li>
      <img src={"/public/images/avatars/" + avatar} alt="sumText"></img>
      {name} {surname} <CheckinBtn />
    </li>
  );
}

PeopleItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PeopleItem;
