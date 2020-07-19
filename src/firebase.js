import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRJWxV7tIaGHW9sg8TFzyrt9ZUPB6tC3c",
  authDomain: "instagram-clone-baa77.firebaseapp.com",
  databaseURL: "https://instagram-clone-baa77.firebaseio.com",
  projectId: "instagram-clone-baa77",
  storageBucket: "instagram-clone-baa77.appspot.com",
  messagingSenderId: "856031072016",
  appId: "1:856031072016:web:ff2f6ea6a204e4df44df95",
  measurementId: "G-0854LR7BF3",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
