import { initializeApp, FirebaseApp } from "firebase/app"
import { getAuth, Auth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC4d9HlpQ2S_29wSD7rhAsFNXSBO99OhIg",
  authDomain: "ecommerce-d3124.firebaseapp.com",
  projectId: "ecommerce-d3124",
  storageBucket: "ecommerce-d3124.appspot.com",
  messagingSenderId: "331261640781",
  appId: "1:331261640781:web:966c5949733b9c25481c04",
  measurementId: "G-46FTTWYL8H",
}

const app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(app)

export { auth }
