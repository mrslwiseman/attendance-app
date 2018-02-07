import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import StoryRouter from 'storybook-router'

import { Link, Router, browserHistory } from 'react-router-dom'
import { Grid, Container, Segment } from 'semantic-ui-react'
// import '/client/semantic.css'

import Search from '/imports/ui/components/Search'
// import AddVolunteer from '/imports/ui/components/AddVolunteer'
import Avatar from '/imports/ui/components/Avatar'
import CheckInList from '/imports/ui/components/CheckInList'
import CheckedInList from '/imports/ui/components/CheckedInList'
import NewVolunteerForm from '/imports/ui/components/NewVolunteerForm'



storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

const pplList = [
  {_id: "1", pplName: "Mike", pplSurname: "King", pplAvatar: "1.jpg"},
  {_id: "2", pplName: "Joe", pplSurname: "Szili", pplAvatar: "2.jpg", isCheckedIn: false},
]

storiesOf('Components', module)
  .addDecorator(StoryRouter())
  //.add('AddVolunteer', () => ( <AddVolunteer /> ))
  .add('Avatar - checked out', () => ( 
    <Avatar 
      _id="aab45bb"
      firstName="Ed"
      lastName="Sheeran"
      fileName="3.jpg"
      isCheckedIn={false}
    /> ))
  .add('Avatar - checked in', () => ( 
    <Avatar 
      _id="aab45bb"
      firstName="Ed"
      lastName="Sheeran"
      fileName="3.jpg"
      isCheckedIn={true}
    /> ))

  .add('Check In List', () => ( 
      <CheckInList 
        loading={false}
        ppl={pplList}
        recordAttendance={() => {alert("recordAttendance()")}}
      /> 
    ))

  .add('Checked In List - loading', () => ( 
    <CheckedInList 
      loading={true}
      ppl={[]}
      recordAttendance={() => {alert("recordAttendance()")}}
    /> ))
  .add('Checked In List - nobody', () => ( 
    <CheckedInList 
      loading={false}
      ppl={[]}
      recordAttendance={() => {alert("recordAttendance()")}}
    /> ))
  .add('Checked In List - normal', () => ( 
    <CheckedInList 
      loading={false}
      ppl={pplList}
      recordAttendance={() => {alert("recordAttendance()")}}
    /> ))
  .add('NewVolunteerForm', () => ( <NewVolunteerForm /> ))
  .add('Search', () => ( <Search /> ))
