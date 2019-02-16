import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Initialize Firebase

var config = { /*your Firebase config and API key here*/ };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
