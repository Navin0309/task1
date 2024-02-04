import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBKoR8i9abIocm19HsrIbx5NIkMTMD9OrA",
  authDomain: "chating-1354e.firebaseapp.com",
  projectId: "chating-1354e",
  storageBucket: "chating-1354e.appspot.com",
  messagingSenderId: "654711947458",
  appId: "1:654711947458:web:86fc54d614798f3e6c7b5b"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider }
