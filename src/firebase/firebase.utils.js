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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log('ERROR crating user', e.message);
        }
    }

    return userAuth;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
