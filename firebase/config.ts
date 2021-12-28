import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// if (!firebase.getApps.length) {
//     firebase.initializeApp(clientCredentials);
// }

const app = initializeApp(clientCredentials);
const auth = getAuth(app);
const db = getFirestore(app);
const providers = {
    github: new GithubAuthProvider(),
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
    twitter: new TwitterAuthProvider()
}

export { app, auth, db, providers };
// export default firebase;
