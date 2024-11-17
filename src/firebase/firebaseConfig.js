// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA1ZpvZxGCt7AJIyYvaFfGZY9qxp8OWEAo",
    authDomain: "icon-a0a32.firebaseapp.com",
    projectId: "icon-a0a32",
    storageBucket: "icon-a0a32.firebasestorage.app",
    messagingSenderId: "808587240793",
    appId: "1:808587240793:web:957f59a082fc714c7a5848",
    measurementId: "G-9WQPCFZEK2"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
