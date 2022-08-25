// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbtihjedQTzqK0olVCYOe7hOJqwiq1qDA",
  authDomain: "new-slack-clone-de0c8.firebaseapp.com",
  projectId: "new-slack-clone-de0c8",
  storageBucket: "new-slack-clone-de0c8.appspot.com",
  messagingSenderId: "69501846592",
  appId: "1:69501846592:web:d40fe33a0b3d9752ff8ba5",
  measurementId: "G-JH56JYNNGP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
