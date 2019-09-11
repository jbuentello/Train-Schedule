$(document).ready(function() {
   
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBOlGrJturWavBdtVEWa33ABqiAmsi7MtQ",
        authDomain: "train-scheduler-72bab.firebaseapp.com",
        databaseURL: "https://train-scheduler-72bab.firebaseio.com",
        projectId: "train-scheduler-72bab",
        storageBucket: "train-scheduler-72bab.appspot.com",
        messagingSenderId: "199082199417",
        appId: "1:199082199417:web:337a2e80b62f4e411807a8"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var db = firebase.database();

}
