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

      $("#newTrain").on("click", function(event) {
        event.preventDefault();

      //Add Variables to be able to grab the data that is entered
      var Name = $(#trainName-input).val()
      var TrainOne = $("#trainOne-input").val()
      var Destination = $("#destination-input").val()
      var Freq = $("#freq-input").val()

      var TrainData= {
          Name: Name,
          Destination: Destination,
          Start: TrainOne,
          Frequency: Freq 
      };

      //Push TrainData to the database
      database.ref().push(TrainData);
}:
