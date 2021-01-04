
import firebase from "firebase";

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDCRwgA9fCKnd97LFLkVPkHFFrFJPdaGuI",
    authDomain: "portfolio-contact-form-997a2.firebaseapp.com",
    projectId: "portfolio-contact-form-997a2",
    storageBucket: "portfolio-contact-form-997a2.appspot.com",
    messagingSenderId: "73466424350",
    appId: "1:73466424350:web:092f14e9b94994e395120f"
});

var db = firebaseApp.firestore();

export { db };