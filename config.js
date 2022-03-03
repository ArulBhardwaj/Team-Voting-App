import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAJkNPwBKIL9KJ4Ato9GTxrfafKmsyrJzU",
  authDomain: "team-voting-app-fee6f.firebaseapp.com",
  databaseURL: "https://team-voting-app-fee6f-default-rtdb.firebaseio.com",
  projectId: "team-voting-app-fee6f",
  storageBucket: "team-voting-app-fee6f.appspot.com",
  messagingSenderId: "734381047184",
  appId: "1:734381047184:web:af34939daf15e42ae08715"
};

  // Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();