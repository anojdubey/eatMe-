import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCnDoDQSpNAR3-D1nNp182hsu-Bo9wflc",
    authDomain: "eatme-327911.firebaseapp.com",
    projectId: "eatme-327911",
    storageBucket: "eatme-327911.appspot.com",
    messagingSenderId: "732583754725",
    appId: "1:732583754725:web:9e1162a9a0381232e84d0c",
    measurementId: "G-FNR2M92Q0W"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  firebase.firestore().settings({ experimentalForceLongPolling: true }); 

  export default firebase;
  