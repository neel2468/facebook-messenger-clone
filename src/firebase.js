import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAfFoBk818cQK3c70MQjpQVoLbhCqENJoY",
        authDomain: "facebook-messenger-clone-401ef.firebaseapp.com",
        projectId: "facebook-messenger-clone-401ef",
        storageBucket: "facebook-messenger-clone-401ef.appspot.com",
        messagingSenderId: "853971473364",
        appId: "1:853971473364:web:15491b99138621afc03c41"
});

const db = firebaseApp.firestore();

export default db;