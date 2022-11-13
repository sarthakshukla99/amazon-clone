// var db = firebase.firestore();
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD5wezb9cX2NoECKdop6ldVFfFJ6-pu-zI",
    authDomain: "react-hooks-blog-ecc98.firebaseapp.com",
    projectId: "react-hooks-blog-ecc98",
    storageBucket: "react-hooks-blog-ecc98.appspot.com",
    messagingSenderId: "606895579060",
    appId: "1:606895579060:web:c1c2b8e677d697237b9ce1",
};

firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();

const auth = firebase.auth();

export {auth };