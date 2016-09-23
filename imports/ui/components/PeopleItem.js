import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CheckinBtn from './CheckinBtn';


function PeopleItem(props) {
  const {
    _id,
    name,
    surname,
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
      {name} {surname} <CheckinBtn />
       
      {/*  <button
          type="button"
          value="Checkin" 
          onClick={this.handleCheckin().bind(this)} 
          >CHK</button> */}
    </li>
  );
}

PeopleItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
};

export default PeopleItem;
