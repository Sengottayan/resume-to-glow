
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Firebase configuration using your project's credentials
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with settings
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

// Check if running in development mode to prevent unnecessary console logs in production
if (import.meta.env.DEV) {
  console.log("Firebase initialized with project:", firebaseConfig.projectId);
  
  // Use Firebase emulator if needed
  // Uncomment these lines to use emulators during development
  // connectFirestoreEmulator(db, "localhost", 8080);
  // connectStorageEmulator(storage, "localhost", 9199);
}

// Test Firestore connection
const testFirestoreConnection = async () => {
  try {
    // Simple ping to verify connection
    const ping = await fetch(`https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents`, { 
      method: 'OPTIONS',
      mode: 'cors'
    });
    return ping.ok;
  } catch (error) {
    console.error("Firebase connection test failed:", error);
    return false;
  }
};

export { app, db, storage, testFirestoreConnection };
