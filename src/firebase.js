import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAl27mZ6KzFyNSkR7JVESok-EOCwCMVVU",
  authDomain: "facebook-clone-1aee0.firebaseapp.com",
  databaseURL: "https://facebook-clone-1aee0.firebaseio.com",
  projectId: "facebook-clone-1aee0",
  storageBucket: "facebook-clone-1aee0.appspot.com",
  messagingSenderId: "611081659732",
  appId: "1:611081659732:web:dc8362ff7450e89e6b14c1",
  measurementId: "G-HDHPXWREDR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
// database
const db = firebaseApp.firestore();
// authentication
const auth = firebaseApp.auth();
// auth provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
