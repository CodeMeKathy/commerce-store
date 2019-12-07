// Firebase Utility Methods

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBUZb4Zl6bSMW_euWjL3g-Ofk1TjBPusMg",
  authDomain: "codemekathystore.firebaseapp.com",
  databaseURL: "https://codemekathystore.firebaseio.com",
  projectId: "codemekathystore",
  storageBucket: "codemekathystore.appspot.com",
  messagingSenderId: "102549482425",
  appId: "1:102549482425:web:0f6e6d5dff2e6f3861e468",
  measurementId: "G-JWFRVXWJ5B"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propmt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
