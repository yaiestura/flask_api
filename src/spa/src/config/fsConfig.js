import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBACyT_OlUX-Ap4lhzF22lX8OPnVeau8ZQ",
    authDomain: "onviftester.firebaseapp.com",
    databaseURL: "https://onviftester.firebaseio.com",
    projectId: "onviftester",
    storageBucket: "onviftester.appspot.com",
    messagingSenderId: "300299386420"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;