import { initializeApp } from "firebase/app";
import { PRIVATE_ENV } from "@/constants";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: PRIVATE_ENV.FIREBASE_API_KEY,
  authDomain: PRIVATE_ENV.FIREBASE_AUTH_DOMAIN,
  projectId: PRIVATE_ENV.FIREBASE_PROJECT_ID,
  storageBucket: PRIVATE_ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PRIVATE_ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: PRIVATE_ENV.FIREBASE_APP_ID,
  measurementId: PRIVATE_ENV.FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

// export const analytics = getAnalytics(app);

export const firebaseStore = getFirestore(app);
