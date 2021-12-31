import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {

  apiKey: "AIzaSyAGO3kdeBNW263QxtElFG0bNQpB_CTYt4o",

  authDomain: "ecom-site-fc84d.firebaseapp.com",

  projectId: "ecom-site-fc84d",

  storageBucket: "ecom-site-fc84d.appspot.com",

  messagingSenderId: "1063403734229",

  appId: "1:1063403734229:web:71c3929180c093703c8e5c"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
