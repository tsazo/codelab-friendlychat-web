/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyAxXaNvdEXAu4wy6_5wcHzAWrcReGXp0Lo",
  authDomain: "friendlychat-b396a.firebaseapp.com",
  projectId: "friendlychat-b396a",
  storageBucket: "friendlychat-b396a.appspot.com",
  messagingSenderId: "1007300634550",
  appId: "1:1007300634550:web:6b139fe89641db2b348317"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}