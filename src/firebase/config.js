import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDoWfHkdZjC-YWFab8_jrGI5_KZ0M7a61I",
    authDomain: "vue-firebase-project-d9571.firebaseapp.com",
    projectId: "vue-firebase-project-d9571",
    storageBucket: "vue-firebase-project-d9571.appspot.com",
    messagingSenderId: "632032317288",
    appId: "1:632032317288:web:14e314db405de9bffb10dd"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore services
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
export { projectFirestore, timestamp }
















