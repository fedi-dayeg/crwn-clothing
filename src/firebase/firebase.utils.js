import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTqytxPlm1iVqbCFFnOaPlrSfjD22Nm9E",
    authDomain: "crwn-db-648ab.firebaseapp.com",
    databaseURL: "https://crwn-db-648ab.firebaseio.com",
    projectId: "crwn-db-648ab",
    storageBucket: "crwn-db-648ab.appspot.com",
    messagingSenderId: "590845926267",
    appId: "1:590845926267:web:b80d0e9e822e7a8be13bde",
    measurementId: "G-WGQ473QFYJ"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
