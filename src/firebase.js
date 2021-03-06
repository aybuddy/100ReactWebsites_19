import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBfnH9n5itCqO9OXKDMlRbkA3I7UNkbU6E',
  authDomain: 'whatsapp-clone-cp-859d9.firebaseapp.com',
  projectId: 'whatsapp-clone-cp-859d9',
  storageBucket: 'whatsapp-clone-cp-859d9.appspot.com',
  messagingSenderId: '553047364848',
  appId: '1:553047364848:web:ddf9e9760f023f4cb91e35',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
