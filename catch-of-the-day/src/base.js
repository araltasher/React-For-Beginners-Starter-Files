import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBplU2JyQMmopL0G27UU7xqQwA5iM5hgUg",
  authDomain: "catch-of-the-day-ffe1b.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ffe1b.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;