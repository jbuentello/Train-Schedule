

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

    //Ask Teacher how to access all data on other sites...do I use for each or do I use snapshot?
    db.ref().once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var childData = childSnapshot.val();

            var Name = childData.Name;
            var TrainOne = childData.Start;
            var Destination = childData.Destination;
            var Freq = childData.Frequency; 
            // console.log(prevChildKey);
        // });
        var firstTrainTime = moment(TrainOne, "HH:mm").subtract(1, "years");
        // var currentTime= moment();
        // var minutes = currentTime.minutes();
        var diffTime = moment().diff(moment(firstTrainTime), "minutes");
        var minutesUntilArrival = Freq - (diffTime % Freq);
        var arrivalTime = moment().add(minutesUntilArrival,"minutes").format("HH:mm");
        console.log(arrivalTime);
        console.log(minutesUntilArrival);
    
        var markup = "<tr><td>"+ Name +"</td><td>" + Destination + "</td><td>" + Freq + "</td><td>" + arrivalTime + "</td><td>" + minutesUntilArrival + "</td></tr>";
        $(".tableRow").append(markup);
        })
    });

    $("#newTrain").on("click", function(event) {
        event.preventDefault();

        //Add Variables to be able to grab the data that is entered
        var Name = $("#trainName-input").val();
        var TrainOne = $("#TrainOne-input").val();
        var Destination = $("#destination-input").val();
        var Freq = $("#freq-input").val();

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
    
        db.ref().limitToLast(1).on("child_added", function(childSnapshot, prevChildKey) {
            var Name = childSnapshot.val().Name;
            var TrainOne = childSnapshot.val().Start;
            var Destination = childSnapshot.val().Destination;
            var Freq = childSnapshot.val().Frequency; 
            console.log(prevChildKey);
        // });
        var firstTrainTime = moment(TrainOne, "HH:mm").subtract(1, "years");
        // var currentTime= moment();
        // var minutes = currentTime.minutes();
        var diffTime = moment().diff(moment(firstTrainTime), "minutes");
        var minutesUntilArrival = Freq - (diffTime % Freq);
        var arrivalTime = moment().add(minutesUntilArrival,"minutes").format("HH:mm");
        console.log(arrivalTime);
        console.log(minutesUntilArrival);
    
        var markup = "<tr><td>"+ Name +"</td><td>" + Destination + "</td><td>" + Freq + "</td><td>" + arrivalTime + "</td><td>" + minutesUntilArrival + "</td></tr>";
        $(".tableRow").append(markup);
    });
});
    
});