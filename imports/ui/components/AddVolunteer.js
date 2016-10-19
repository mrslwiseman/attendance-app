import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

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
      <div>
          <Link className={"ui button"} to="/">Home</Link>
      </div>
    );
  }
}
export default AddVolunteer;
