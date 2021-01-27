import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzj7FLJCzaeuukm-B7KMOOFpC5_krB4NU",
  authDomain: "signal-clone-rnative.firebaseapp.com",
  projectId: "signal-clone-rnative",
  storageBucket: "signal-clone-rnative.appspot.com",
  messagingSenderId: "643458930021",
  appId: "1:643458930021:web:9b3b0eaef97ee7ecb27d8c",
  measurementId: "G-VSKD0PNTQ8",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
