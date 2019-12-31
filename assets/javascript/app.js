// Click button for starting the game
var currentQuestion = 0;
$("#start").on("click", function (e) {

  //when game starts reset question counter to 0
  currentQuestion = 0;

  //call the function to display the question
  loadQuestion();

  // The timer starts
  var counter = 5;
  var interval = setInterval(myTimer, 1000);

 function myTimer() {
    counter--;
    if (counter === 0) {
      clearInterval(interval);
      document.getElementById("questions").innerHTML = "Time is Up!";
    }
    document.getElementById("counter").innerHTML = counter;
    workArea.html('<h3>The Correct Answer Is: ' + questions[currentQuestion].correctAnswer + '</h3>');
  };
});


var workArea = $("quizcontent");

//click listener for when user clicks an answer
$(document).on("click", ".answer-button", function (e) {

  //compare user's answer to the correct answer from our question object
  if ($(this).attr('data-name') === questions[currentQuestion].correctAnswer) {
    clearInterval(counter);
    workArea.html('<h2>Correct!</h2>');
    workArea.append('<img src="' + questions[currentQuestion].image + '" />');
    
  }

  else {
    clearInterval(counter);
    workArea.html('<h2>Incorrect!</h2>');
    workArea.html('<h3>The Correct Answer Is: ' + questions[currentQuestion].correctAnswer + '</h3>');
    workArea.append('<img src="' + questions[currentQuestion].image + '" />');
  };
  

  //increase question counter
  currentQuestion++;

  //display next question on the screen
  loadQuestion();
});


function loadQuestion() {

  //get a question from the array and display in #questions block
  $("#questions").html(questions[currentQuestion].question);


  //loop through answers and display them as buttons
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    $("#questions").append("<button class='answer-button' id='button' data-name='" + questions[currentQuestion].answers[i]
      + "'>" + questions[currentQuestion].answers[i] + "</button>");
  }
}


// Set of questions
var questions = [{
  question: "What 90's hip hop artist made the song 'It Was A Good Day'?",
  answers: ["Tupac", "Dr. Dre", "Snoop Dogg", "Ice Cube"],
  correctAnswer: "Ice Cube",
  image: "assets/images/icecube.jpg"
},

{
  question: "What is the last name of the group, 'A Tribe called...'?",
  answers: ["Menance", "Quest", "Black", "Theory"],
  correctAnswer: "Quest",
  image: "assets/images/tribequest.jpg"
},

{
  question: "Tupac Shakur was a roadie for this hip hop group?",
  answers: ["Digital Underground", "Wu-Tang Clan", "NWA", "Mobb Deep"],
  correctAnswer: "Digital Underground",
  image: "assets/images/shockg.jpg"
},

{
  question: "Nas first album was named?",
  answers: ["It Was Written", "I Am...", "God's Son", "Illmatic"],
  correctAnswer: "Illmatic",
  image: "assets/images/illmatic.jpg"
},

{
  question: "Lauryn Hill was once a member of this famous group?",
  answers: ["Salt-N-Pepa", "TLC", "The Fugees", "Floetry"],
  correctAnswer: "The Fugees",
  image: "assets/images/thefugees.jpg"
},

{
  question: "Finish this line from the Wu-Tang Clan: 'Cash rules everything around me, ...?'",
  answers: ["Queens get the money", "Dream and get the money", " We get the money", "C.R.E.A.M. get the money"],
  correctAnswer: "C.R.E.A.M. get the money",
  image: "assets/images/creamlogo.jpg"
},

{
  question: "Kris Kross made this hit song?",
  answers: ["Juicy", "Jump", "Juju On That Beat", "Jesus Walks"],
  correctAnswer: "Jump",
  image: "assets/images/krisjump.jpg"
},

{
  question: "Jay-Z featured Mary J. Blige song this song from his first album?",
  answers: ["Bonnie & Clyde", "Empire State Of Mind", "Best Of Me", "Can't Knock The Hustle"],
  correctAnswer: "Can't Knock The Hustle",
  image: "assets/images/jayzalbum.jpg"
}];