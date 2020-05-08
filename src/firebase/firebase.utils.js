// Firebase Utility Methods

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBRT0YpA87q1eC0eYRTtERmgr_vJdDMJTE',
  authDomain: 'cmk-store.firebaseapp.com',
  databaseURL: 'https://cmk-store.firebaseio.com',
  projectId: 'cmk-store',
  storageBucket: 'cmk-store.appspot.com',
  messagingSenderId: '565993191023',
  appId: '1:565993191023:web:802a0514a012398942ff9a',
  measurementId: 'G-Z4E430N66J'
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  console.log(snapShot)
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
