var firebaseConfig = {
    apiKey: "AIzaSyAeIuXEHcgdLTBaWcTjDKhd1MXvE2hyxuA",
    authDomain: "test-17750.firebaseapp.com",
    databaseURL: "https://test-17750.firebaseio.com",
    projectId: "test-17750",
    storageBucket: "",
    messagingSenderId: "645414208485",
    appId: "1:645414208485:web:a3df99bab761851435e50c"
  };
  firebase.initializeApp(firebaseConfig)

  var database = firebase.database();
  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = "";