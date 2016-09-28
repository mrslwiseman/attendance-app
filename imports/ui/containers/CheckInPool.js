import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import CheckinList from '../components/CheckinList';
import mcPeople , {insert, remove} from '/imports/collections/mcPeople';
import * as sg from 'sugar';              // sugar utility


const CheckInPool = createContainer(() 
  => {
  const peopleHandle = Meteor.subscribe('ready.for.checkin');
  const loading = ! peopleHandle.ready();
  const ppl = mcPeople.find({pplLastAtn: {$ne: sg.Date.create('today')}}, { sort: { pplLastAtn: 1, pplSurname: -1} }).fetch();

  return {
    loading,
    ppl,
  };
}, CheckinList);

export default CheckInPool;
