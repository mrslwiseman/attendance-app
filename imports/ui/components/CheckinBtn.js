import React, { PropTypes } from 'react';

class CheckinBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      checkedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({checkedIn: !this.state.checkedIn});
  }
  render() {
    const text = this.state.checkedIn ? 'attending' : 'CHECK IN';
    return (
      <button type="button" onClick={this.handleClick}>
        {text} - Click to toggle.
      </button>
    );
  }
}

export default CheckinBtn;