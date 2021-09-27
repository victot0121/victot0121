import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7av1C4q0rBMdB5lK3DqN4JJPYgp9u5Kg",
  authDomain: "chat-up-2efc7.firebaseapp.com",
  projectId: "chat-up-2efc7",
  storageBucket: "chat-up-2efc7.appspot.com",
  messagingSenderId: "991602120344",
  appId: "1:991602120344:web:800dfd004c9feb61fd62ed",
  measurementId: "G-J8PCB4V8ME"
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);
const db = firebaseAPP.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;