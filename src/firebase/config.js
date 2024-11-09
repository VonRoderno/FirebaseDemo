import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQFkQtHy3RUAhOUWyer_3PmUG9oKkZleA",
  authDomain: "reactfirebasedemo-f8ac5.firebaseapp.com",
  projectId: "reactfirebasedemo-f8ac5",
  storageBucket: "reactfirebasedemo-f8ac5.firebasestorage.app",
  messagingSenderId: "1061728289322",
  appId: "1:1061728289322:web:7488f52779243727f4f953",
  measurementId: "G-NLGY71H74F"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}