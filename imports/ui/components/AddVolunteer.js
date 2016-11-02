import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
// import NewVolunteerForm from './NewVolunteerForm';

import mcPeople from '/imports/collections/mcPeople';

class AddVolunteer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handlesSubmit method");
    this.props.onSubmit({
      pplName: this.pplName.value,
      pplSurname: this.pplSurname.value,
    });
  }

  render() {
    return (
        <section id="volunteer-signup-form">
            <h1>New Volunteer Signup Form</h1>
            <h2>Your Details</h2>
            <form name="newVolunteer" onSubmit={this.handleSubmit} className="commentForm">
              <input ref={c => (this.pplName = c)} type="text" id="pplName" placeholder="First name" />
              <input ref={c => (this.pplSurname = c)} type="text" id="pplSurname" placeholder="Surname" />
              <div className={"submit-cancel"} >
              <input className={"ui button"} type="submit" value="Submit" />
              <div className={"a-wrap"}><Link className={"ui button"} to="/">Cancel</Link></div>
              </div>
            </form>
        </section>
    );
  }
}

AddVolunteer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddVolunteer;
