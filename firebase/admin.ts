/**
 * Firebase Admin Initialization
 *
 * This file sets up the Firebase Admin SDK for server-side operations, including authentication and Firestore access.
 * It ensures that Firebase is only initialized once per serverless environment instance (such as Vercel or AWS Lambda).
 *
 * Exports:
 * - auth: Firebase Admin Authentication instance
 * - db: Firebase Admin Firestore instance
 */

import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
  const apps = getApps();

  // Initialize Firebase Admin if no apps have been initialized yet
  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }

  // Return instances for authentication and Firestore
  return {
    auth: getAuth(),
    db: getFirestore(),
  };
};

// Return instances for authentication and Firestore
export const { auth, db } = initFirebaseAdmin();
