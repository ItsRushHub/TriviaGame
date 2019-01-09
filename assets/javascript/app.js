// Click button for starting the game
 $(document).on("click", "#start", function(e) {
  game.questionsArray();

  // The timer starts
  var counter = 20;
  var interval = setInterval (function () {

  document.getElementById("counter").innerHTML = counter;
  counter--;

    if (counter === 0) {
      clearInterval(interval);
      document.getElementById(counter).innerHTML = "Time is Up!";

        alert("You're out of time!");
    }
}, 1000);




 });




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






// Load questions when the game starts

function questionsLoop(array) {
  var questionsArray = [];
  for (var i = 0; i < array.length; i++) {
    questionsArray.push(array[i].question);
  }
  return questionsArray;
};

var game = {
  setOfQuestions: questionsLoop(questions),
  currentQuestion: 0,
  counterClock: counter,
  correct: 0,
  incorrect: 0,
}




















  
  // countdown: function() {
  //   game.counterClock--;
  //   $("#counter").html(game.counterClock);

  //   if (game.counterClock === 0) {
  //     console.log('TIME UP');
  //     game.timeUp();
  //   }
  // },


  
  // loadQuestion: function() {
  //   timer = setInterval (game.countdown, 2000);

  //   // panel.html('<h2>' + setOfQestions[this.current.question].question + '</h2>' );
  //   for (var i = 0; i<questions[this.currentQuestion].answers.length; i++) {
  //     questionsArray.push(array[i].question);
  //   }
  //   return loadQuestion;
  // },



  // theNextQuestion: function() {
  //   game.counterClock = counter
  //   $("#counter").html(game.counterClock);
  //   game.current++;
  //   game.loadQuestion();
  // },

  // If the time is up clear the timer

  // timeUp: function() {
  //   clearInterval(timer);
  //   $("#counter").html(game.counterClock);

  //   if (game.current === questions.length - 1){
  //     setTimeout(game.results, 2000);
  //   }

  //   else {
  //     setTimeout(game.theNextQuestion, 2000);

  //   }
  // },

  // theresults: function(){
  //   clearInterval(timer);
  // },


  // incorrectAnsw: function() {
  //   game.incorrect++;
  //   clearInterval(timer);

  //   if (game.currentQuestion !== correctAnswer) {
  //     setTimeout(game.results, 2000);
  //   }

  //   else {
  //     setTimeout(game.theNextQuestion, 2000);
  //   }
  // },


  // correctAnsw: function() {
  //   clearInterval(timer);
  //   game.correct++;

  //   if (game.currentQuestion === correctAnswer) {
  //     setTimeout(game.results, 2000)
  //   }

  //   else {
  //     setTimeout(game.theNextQuestion, 2000);
  //   }
  // },



  // // Game Reset
  //   reset: function (){
  //     this.currentQuestion = 0;
  //     this.counter = counter;
  //     this.correct = 0;
  //     this.incorrect = 0;
  //     this.loadQuestion();

  //   }
  

// };






// $(document).ready(function() {
//   $("#start").click(function() {
//     game.setOfQestions();

//     alert("Game is starting!");
//     console.log(start);
//   });
// });



  // var elem = document.getElementById("start");

  // var timerId = setInterval (countdown, 1000);

  // function countdown() {
  //   if (timeLeft === 0) {
  //     clearTimeout(timerId);
  //     game.loadQuestion();
  //   }

  //   else {
  //     elem.innerHTML = timeLeft + ' seconds remaining';
  //       timeLeft--;
  //   }
  // };










