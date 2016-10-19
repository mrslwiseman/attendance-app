import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class NewVolunteerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="volunteer-signup-form">
          <h1>New Volunteer Signup Form</h1>
          <p>Form content will go here</p>
      </section>
    );
  }
}
export default NewVolunteerForm;
