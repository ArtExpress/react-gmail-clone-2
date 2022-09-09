import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpPMDGpTnl9n77CIwoDv9A4bIFYSQhmiM",
    authDomain: "clone-7960b.firebaseapp.com",
    projectId: "clone-7960b",
    storageBucket: "clone-7960b.appspot.com",
    messagingSenderId: "383109761045",
    appId: "1:383109761045:web:494bbd208d09f907bae61c",
    measurementId: "G-007622Q6N0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }