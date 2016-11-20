
import { composeWithTracker } from 'react-komposer';
import { WordpressPostsList } from '../components/wordpressPosts.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';
import { MediumPosts } from '../../startup/client/index';
/*import { WordpressImages } from '../../startup/client/index';*/


const composer = (params, onData) => {
  const postSubscription = Meteor.subscribe('REST2DDP', 'getMediumPosts');
/*  const imageSubscription = Meteor.subscribe('REST2DDP', 'getAllWordPressMedia');*/
  if (postSubscription.ready()) {
    const documents = WordpressPosts.find().fetch();
    console.log(documents);
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(WordpressPostsList);


