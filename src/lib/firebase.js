import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVYvwVNDM1vQoJLCkGI4gXyFfowu_tWVw",
    authDomain: "twitter-4e819.firebaseapp.com",
    projectId: "twitter-4e819",
    storageBucket: "twitter-4e819.appspot.com",
    messagingSenderId: "183840305951",
    appId: "1:183840305951:web:729347468886abd240b62a"
};

const firebase = Firebase.initializeApp(config);
const auth = Firebase.auth();
const db = firebase.firestore();

export { 
    firebase,
    auth,
    db,
};