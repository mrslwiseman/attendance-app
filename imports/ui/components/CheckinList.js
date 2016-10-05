import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import Modal from 'react-modal';

//============================================================================//
// A word about react-modal 
//
// Modal's can't be called from anywhere using standard React. This means that
// a modal dialogue can only be embedded within a parent element which is whats
// happening in this module. As the Confirmation Modal is specific to this list,
// this is not really a big problem just a little icky from a coding style 
// perpective.
// 
// It will be a problem if we ever wanted to be invoke an "add a person" 
// dialogue from within 2 or 3 different components.
//
// Therefore at some stage we'll need to consider refactoring modals using 
// either Flux or Redux.
//
//============================================================================//

// Custom style for Modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class CheckinList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      _id: "",
      name: "",
      surname: "",
      avatar: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clickConfirm = this.clickConfirm.bind(this);
  }

  // Modal handlers
  openModal(person_id, name, surname, avatar) {
    this.setState({_id: person_id})
    this.setState({name: name})
    this.setState({surname: surname})
    this.setState({avatar: avatar})
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  clickConfirm(person_id) {
    this.props.recordAttendance(person_id)
    this.closeModal();
  }

  // Main render with built in Modal
  render() {
    if (this.props.loading) {
      return (
        <p>Loading...</p>
      );
    }

    if (this.props.ppl.length === 0) {
      return (
        <p>No one to check in!</p>
      );
    }

    const isCheckedIn = false;

    return (
      <div 
        className={'column padded'}
        style={{backgroundColor: 'Snow'}} 
      >
        <h2>Ready for Check In</h2>
        <div className={'ui search'}>
          <div className={'ui icon input'} >
            <input className={'prompt'} type='text' placeholder='Type name to search'></input>
            <i className={'inverted circular search icon'}></i>
          </div>
        </div>
        <div className={'ui relaxed items'}>
          {this.props.ppl.map(({ _id, pplName, pplSurname, pplAvatar }) => (
            <div key={_id} onClick={() => this.openModal(_id, pplName, pplSurname, pplAvatar)} >
              <Avatar
                _id={_id}
                firstName={pplName}
                lastName={pplSurname}
                isCheckedin={isCheckedIn}
                fileName={pplAvatar}
              />
            </div>
          ))}

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles} 
            >
            <div aligned={'center'}>
              <h2>Checkin</h2>
              <br></br>
              <Avatar 
                _id={this.state._id}
                firstName={this.state.name}
                lastName={this.state.surname}
                isCheckedin={isCheckedIn}
                fileName={this.state.avatar}
              />
              <br/>
              <div>
                <button className={'ui button'} onClick={this.closeModal}>not me!</button>
                <button className={'ui green button'} onClick={() => this.clickConfirm(this.state._id)}>CONFIRM</button>
              </div>
            </div>
          </Modal>

        </div>
        
      </div>
    );
  }
}

CheckinList.propTypes = {
  loading: PropTypes.bool.isRequired,
  ppl: PropTypes.array.isRequired, 
  recordAttendance: PropTypes.func.isRequired
};

export default CheckinList;