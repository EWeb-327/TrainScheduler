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

  $("#add").on("click", function(){
      event.preventDefault();

      firstTrain = $("#time").val()
      frequency = $("#minutes").val()
      var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years")
      var currentTime = moment();
      var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
      var tRemainder = diffTime % frequency;
      var tMinutesTillTrain = frequency - tRemainder;
      var nextTrainEq = moment().add(tMinutesTillTrain, "minutes");
      var nextTrain = moment(nextTrainEq).format("hh:mm");


      database.ref().push({
          trainName: $("#train").val().trim(),
          destination: $("#place").val().trim(),
          frequency: $("#minutes").val().trim(),
          nextTrain: nextTrain,
          minutesAway: tMinutesTillTrain
      })
    $("#train").val("")
    $("#place").val("")
    $("#time").val("")
    $("#minutes").val("");
  });
  
  database.ref().on("child_added", function(snapshot){
      console.log(snapshot.val());

      var newRow = $("<tr>").append(
          $("<td>").text(snapshot.val().destination),
          $("<td>").text(snapshot.val().trainName),
          $("<td>").text(snapshot.val().frequency),
          $("<td>").text(snapshot.val().nextTrain),
          $("<td>").text(snapshot.val().minutesAway),
      )
      $("#tbody").append(newRow)
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
  })