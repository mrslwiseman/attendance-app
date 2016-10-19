import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import NewVolunteerForm from './NewVolunteerForm';

import mcPeople from '/imports/collections/mcPeople';

class AddVolunteer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit () {
    mcPeople.insert({
      // check record attendance insert for example
    })
  }

  render() {
    return (
      <section id="add-voluteer">
          <NewVolunteerForm />
      </section>
    );
  }
}
export default AddVolunteer;
