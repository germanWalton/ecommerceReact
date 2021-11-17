

import { firebase } from '@firebase/app'
import 'firebase/firestore';

const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyDXcHW6qN8-PNoczj7akjnlo1Nesh8reHs",
    authDomain: "react-app-walton-bakery.firebaseapp.com",
    projectId: "react-app-walton-bakery",
    storageBucket: "react-app-walton-bakery.appspot.com",
    messagingSenderId: "589334442066",
    appId: "1:589334442066:web:23d8ead2e87ce3b2c52f8b",
    measurementId: "G-5W7JVYQTLE"
  })
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}