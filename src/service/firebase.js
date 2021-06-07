
  const firebaseConfig = {
    apiKey:process.env.REACT.APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT.APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT.APP_FIREBASE_PROJECT_ID,
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);