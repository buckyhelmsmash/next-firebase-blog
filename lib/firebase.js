import { getApps, initializeApp } from 'firebase/app'
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import{ getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeADBmHmHJVZlDD8bh-VXa28Xxj1I6yWQ",
    authDomain: "next-fire-blog-32817.firebaseapp.com",
    projectId: "next-fire-blog-32817",
    storageBucket: "next-fire-blog-32817.appspot.com",
    messagingSenderId: "235240147221",
    appId: "1:235240147221:web:19962747abe06d974e411c"
}

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
// Sign in Firebase using popup auth and Google as the identity provider.
export const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

export const firestore = getFirestore(firebaseApp)