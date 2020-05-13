import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useRef } from "react";

// Your web app's Firebase configuration copied from firebase
var DBConfig = {
  apiKey: "AIzaSyDeuWVxm3pc8wF5y7gDGAoBqa0FXwKjBSQ",
  authDomain: "clothing-b3036.firebaseapp.com",
  databaseURL: "https://clothing-b3036.firebaseio.com",
  projectId: "clothing-b3036",
  storageBucket: "clothing-b3036.appspot.com",
  messagingSenderId: "45532187926",
  appId: "1:45532187926:web:b440e1607ec6af06b01437",
  measurementId: "G-B0EZC3LEXQ",
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshots = await userRef.get();

  if (!snapshots.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
      console.log("User created");
    } catch (error) {
      console.log("Error in creating user", error.message);
    }
  }
  return userRef;
};
//Initializing app
firebase.initializeApp(DBConfig);

export const firestore = firebase.firestore();
export const authObj = firebase.auth();

//Google authentication provider
const provider = new firebase.auth.GoogleAuthProvider();
// trigger always group of popup whenever we use this Google auth provider for authentication and signup
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => authObj.signInWithPopup(provider);
export default firebase;
