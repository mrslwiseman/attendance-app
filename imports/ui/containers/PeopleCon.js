import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PeopleCmp from '../components/PeopleCmp';
import mcPeople , {insert, remove} from '/imports/collections/mcPeople';

function handleSubmit(text) {
  const data = {
    name,
    surname,
  };

  insert.call(data, (error, response) => {
    if (error) {
      console.log(error);
    }
    // success!
  });
}

function handleRemove(_id) {
  const data = {
    _id,
  };

  remove.call(data, (error, response) => {
    if (error) {
      console.log(error);
    }
    // success!
  });
}

const PeopleContainer = createContainer(() 
  => {
  const peopleHandle = Meteor.subscribe('everyone');
  const loading = ! peopleHandle.ready();
  const people = mcPeople.find({}, { sort: { pplLastAtn: 1, pplSurname: -1} }).fetch();

  return {
    loading,
    people,
    onSubmit: handleSubmit,
    onRemove: handleRemove,
  };
}, PeopleCmp);

export default PeopleContainer;
