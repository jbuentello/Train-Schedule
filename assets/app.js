

$(document).ready(function() {
    // src="https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js"
    // src="https://www.gstatic.com/firebasejs/6.5.0/firebase-database.js"

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
    // console.log(db);

    $("#newTrain").on("click", function(event) {
        event.preventDefault();

        //Add Variables to be able to grab the data that is entered
        var Name = $("#trainName-input").val();
        var TrainOne = $("#TrainOne-input").val();
        var Destination = $("#destination-input").val();
        var Freq = $("#freq-input").val();
        // console.log(TrainOne);
        var TrainData= {
            Name: Name,
            Destination: Destination,
            Start: TrainOne,
            Frequency: Freq 
        };

        //Push TrainData to the database
        db.ref().push(TrainData);

        //Figure out how to erase items from the databoxes 
        $("#trainName-input").val("");
        $("#destination-input").val("");
        $("#TrainOne-input").val("");
        $("#freq-input").val("");
    
        //Some thing is not working with this code!
        // FIREBASE OBJECT
        // Name
        // Destination
        // Train one to start
        // Frequency 
        db.ref().on("child_added", function(childSnapshot, prevChildKey) {
            var Name = childSnapshot.val().Name;
            var TrainOne = childSnapshot.val().Start;
            var Destination = childSnapshot.val().Destination;
            var Freq = childSnapshot.val().Frequency; 
            console.log(TrainOne);
        });
        var firstTrainTime = moment(TrainOne, "HH:mm").subtract(1, "years");
        var currentTime= moment();
        var minutes = currentTime.minutes();
        var diffTime = moment().diff(moment(firstTrainTime), "minutes");
        var minutesUntilArrival = diffTime % Freq;
        console.log(minutesUntilArrival);
        console.
        // var tr = $("<tr>")
        // tr.addClass("tr")
        // $(".tableRow").append("<tr>")
        // $("<tr>").append($("<td>").append(Name));
        // $("<tr>").append($("<td>").append(Destination));
        // $("<tr>").append($("<td>").append(Freq));
        // $("<tr>").append($("<td>").append("NA"));
        // $("<tr>").append($("<td>").append("NA"));
        var markup = "<tr><td>"+ Name +"</td><td>" + Destination + "</td><td>" + Freq + "</td><td>" + "NA" + "</td><td>" + "NA" + "</td></tr>";
        $(".tableRow").append(markup);
    });
    
});