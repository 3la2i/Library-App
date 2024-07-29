
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBEITIPDhs8sDErI8rsd6NAE9_Mq2-Oo94",
  authDomain: "library-books-76751.firebaseapp.com",
  projectId: "library-books-76751",
  storageBucket: "library-books-76751.appspot.com",
  messagingSenderId: "581203612788",
  appId: "1:581203612788:web:8dfbdd69850ababb28ed21",
  measurementId: "G-59C6EW3R2L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export default app;
export { db };