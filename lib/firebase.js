import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBeADBmHmHJVZlDD8bh-VXa28Xxj1I6yWQ",
    authDomain: "next-fire-blog-32817.firebaseapp.com",
    projectId: "next-fire-blog-32817",
    storageBucket: "next-fire-blog-32817.appspot.com",
    messagingSenderId: "235240147221",
    appId: "1:235240147221:web:19962747abe06d974e411c"
}

if(!firebase.app.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
