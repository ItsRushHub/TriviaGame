var panel = $('#quizarea');
var countStartNumber = 10;



// Click events

$(document).on('click', '#restart', function(e) {
  game.reset();
});

$(document).on('click', '.answer-button', function(e) {
  game.clicked(e);
});

$(document).on('click', '#start', function(e) {
  $('#bkgrdwrapper').prepend('<h2>Time Remaining: <span id="counter-number">10</span> Seconds</h2>');
  game.loadQuestion();
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



    var game = {
      questions:questions,
      currentQuestion:0,
      counter:countStartNumber,
      correct:0,
      incorrect:0,
      countdown: function(){
        game.counter--;
        $('#counter-number').html(game.counter);
    
        if (game.counter === 0){
          console.log('TIME UP');
          game.timeUp();
        }
      },

      loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
        for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
          panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
        }
      },

      nextQuestion: function(){
        game.counter = countStartNumber;
        $('#counter-number').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
      },

      timeUp: function (){
        clearInterval(timer);
        $('#counter-number').html(game.counter);
    
        panel.html('<h2>Out of Time!</h2>');
        panel.append('<h3>The Correct Answer is: ' + questions[this.currentQuestion].correctAnswer);
        panel.append('<img src="' + questions[this.currentQuestion].image + '" />');
          console.log (game.currentQuestion)
          console.log (questions.length);


        if (game.currentQuestion === questions.length - 1){
          setTimeout(game.results, 2 * 1000);
        } else {
          setTimeout(game.nextQuestion, 2 * 1000);
        }
      },

      results: function() {
        clearInterval(timer);
    
        panel.html('<h2>All done, heres how you did!</h2>');
        $('#counter-number').html(game.counter);
        panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
        panel.append('<br><button id="restart">Restart</button>');
      },

      clicked: function(e) {
        clearInterval(timer);
    

        if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
          this.answeredCorrectly();
        } 
        
        else {
          this.answeredIncorrectly();
        }
      },

      answeredIncorrectly: function() {
        game.incorrect++;
        clearInterval(timer);
        panel.html('<h2>Incorrect!</h2>');
        panel.append('<h3>The Correct Answer is: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
        panel.append('<img src="' + questions[game.currentQuestion].image + '" />');
    
        if (game.currentQuestion === questions.length - 1){
          setTimeout(game.results, 2 * 1000);
        } 
        
        else {
          setTimeout(game.nextQuestion, 2 * 1000);
        }
      },

      answeredCorrectly: function(){
        clearInterval(timer);
        game.correct++;
        panel.html('<h2>Correct!</h2>');
        panel.append('<img src="' + questions[game.currentQuestion].image + '" />');
    
        if (game.currentQuestion === questions.length - 1){
          setTimeout(game.results, 2 * 1000);
        } 
        
        else {
          setTimeout(game.nextQuestion, 2 * 1000);
        }
      },

      reset: function(){
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
      }
    };