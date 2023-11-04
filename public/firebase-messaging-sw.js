// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDWYc7f3M6frs9t3d4osGnZf8jQXr0nVY8",
  authDomain: "hemocare-1ea1f.firebaseapp.com",
  projectId: "hemocare-1ea1f",
  storageBucket: "hemocare-1ea1f.appspot.com",
  messagingSenderId: "841529009014",
  appId: "1:841529009014:web:8c0be786048f7c90b19057",
  measurementId: "G-6G7775WPP3"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: './glassofwater.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});