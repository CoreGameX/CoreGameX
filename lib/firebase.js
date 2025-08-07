// This file sets up the Firebase application and exports the initialized services.

// Import necessary Firebase functions.
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration using Next.js environment variables.
// The `NEXT_PUBLIC_` prefix is crucial for variables to be exposed to the browser.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase.
// This check prevents the app from being initialized multiple times in Next.js.
// It will use an existing app instance if one exists, or create a new one.
// Only initialize on the client side to prevent build-time errors
let app, db, auth;

if (typeof window !== "undefined") {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

  // Get the services from the initialized app.
  db = getFirestore(app);
  auth = getAuth(app);
}

// Export the services so they can be used throughout your application.
export { app, db, auth };