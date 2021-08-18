// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-qI1vsOJwXZb01-v5MGeIGDhc85Qab4I",
    authDomain: "whats-app-clone-c83bf.firebaseapp.com",
    projectId: "whats-app-clone-c83bf",
    storageBucket: "whats-app-clone-c83bf.appspot.com",
    messagingSenderId: "50366563294",
    appId: "1:50366563294:web:63a7c88c7a902f9561d34f",
    measurementId: "G-PVW6JZTPBR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;