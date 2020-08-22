import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDf2nlbMEUFpK18fArgZ5Ca5G_8thv8UhM",
    authDomain: "whatsapp-clone-d93a2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-d93a2.firebaseio.com",
    projectId: "whatsapp-clone-d93a2",
    storageBucket: "whatsapp-clone-d93a2.appspot.com",
    messagingSenderId: "374111523954",
    appId: "1:374111523954:web:4ee369c4fd5af991e01eeb",
    measurementId: "G-3DRW36DQ8X"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;