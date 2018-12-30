// Set of questions
var questions = [{
      question: "What 90's hip hop artist made the song 'It Was A Good Day'?",
      answers: ["Tupac", "Dr. Dre", "Snoop Dogg", "Ice Cube"],
      correctAnswer: "Ice Cube"
    },

    {
      question: "What is the last name of the group, 'A Tribe called...'?",
      answers: ["Menance", "Quest", "Black", "Theory"],
      correctAnswer: "Quest"
    },

    {
      question: "Tupac Shakur was a roadie for this hip hop group?",
      answers: ["Digital Underground", "Wu-Tang Clan", "NWA", "Mobb Deep"],
      correctAnswer: "Digital Underground"
    },

    {
      question: "Nas first album was named?",
      answers: ["It Was Written", "I Am...", "God's Son", "Illmatic"],
      correctAnswer: "Illmatic"
    },

    {
      question: "Lauryn Hill was once a member of this famous group?",
      answers: ["Salt-N-Pepa", "TLC", "The Fugees", "Floetry"],
      correctAnswer: "The Fugees"
    },

    {
      question: "Finish this line from the Wu-Tang Clan: 'Cash rules everything around me, ...?'",
      answers: ["Queens get the money", "Dream and get the money", " We get the money", "C.R.E.A.M. get the money"],
      correctAnswer: "C.R.E.A.M. get the money"
    },

    {
      question: "Kris Kross made this hit song?",
      answers: ["Juicy", "Jump", "Juju On That Beat", "Jesus Walks"],
      correctAnswer: "Jump"
    },

    {
      question: "Jay-Z featured Mary J. Blige song this song from his first album?",
      answers: ["Bonnie & Clyde", "Empire State Of Mind", "Best Of Me", "Can't Knock The Hustle"],
      correctAnswer: "Can't Knock The Hustle"
    }];



 //  Score variables
 var currentQuestion = 0;
 var correctAnswer = 0;
 var quizOver = false;


 $(document).ready(function() {
   $("button").click(function() {

   });


// Start first question
  displayCurrentQuestion();
  $(this).find(".quizMessage").hide();
});