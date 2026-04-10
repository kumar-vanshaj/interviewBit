/**
 * Firebase Client Initialization
 *
 * This file sets up the Firebase Client SDK for use in the browser (client-side).
 * It handles initializing the Firebase app using environment variables and provides exports
 * for authentication (auth) and Firestore database (db) instances.
 *
 * Exports:
 * - auth: Firebase Client Authentication instance
 * - db: Firebase Client Firestore instance
 */

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";

// Firebase configuration object sourced from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app only if no other apps have been initialized
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

// Export initialized auth and firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
