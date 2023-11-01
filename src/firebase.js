// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAZoI0KeQ0NWjdqwTy3Uw-ofz4ERjRuqxY",
    authDomain: "clone-65ab0.firebaseapp.com",
    projectId: "clone-65ab0",
    storageBucket: "clone-65ab0.appspot.com",
    messagingSenderId: "444476372250",
    appId: "1:444476372250:web:c4630ddb5c0520973de8a3",
    measurementId: "G-V41QT3BJT2"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth;
  export {db, auth};