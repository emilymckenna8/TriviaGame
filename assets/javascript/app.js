//set variables
var numCorrect;
var numIncorrect;
var userGuess;
var answers;
var newQuestion;
var currentQuestion = 0;
var unanswered;



//creates object to hold questions and answers

var questions = [{
    question:"Who goes on Ross' honeymoon after Ross chases after Emily?",
    answers:["Phoebe","Ugly Naked Guy","Janice","Rachel"],
    correctAnswer: 3,
},{
    question:"Who is Tag?",
    answers:["Monica's brother","Rachel's assistant","Joey's neighbor","Gunther's alter ego"],
    correctAnswer: 1,
},{
    question:"What is Monica's profession?",
    answers:["barista","cardiologist","chef","model"],
    correctAnswer:2,
},{
    question:"What is the statue that Joey buys for his apartment?",
    answers:["a fishnet-clad woman's leg","Julius Caesar","a dog","a bust of Chandler"],
    correctAnswer:2,

}];


//starts game when button is clicked
$("#start").on("click", startGame);

//listen for user click and record answer

//function to compare user guess to correct guess for each question using a for loop

  //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 15;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#next").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        timesUp();
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
   


     
 
//results pages functions

function incorrect(){
$("#userQuestion").text("Better Luck Next Time! The correct answer was: "+ questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]);
setTimeout(nextQuestion, 1000 * 3);
}

function correct(){
$("#userQuestion").text("Good Job! The correct answer was: "+ questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]);
setTimeout(nextQuestion, 1000 * 3);
}

function timesUp(){
$("#userQuestion").text("<h1>Time's Up!</h1>");
setTimeout(nextQuestion, 1000 * 3);
}

//if statement that determines which results
function checkAnswer() {
    var rightAnswer = questions[currentQuestion].correctAnswer
    console.log(rightAnswer);
if (parseInt(userGuess) === questions[currentQuestion].correctAnswer) {
        numCorrect++;
        console.log("number right: "+numCorrect);
        correct();
        currentQuestion++;
    }

else if (parseInt(userGuess) != questions[currentQuestion].correctAnswer){
        numIncorrect++;
        console.log("number wrong:" + numIncorrect);
        incorrect();
        currentQuestion++;

    }

 if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        timesUp();

}
}

//move on to next question whenever user picks an answer; increase currentQuestion?



$(document).on("click", "#next", function(){
    grabGuess();
    

});

function grabGuess() {
    userGuess = $("input:checked").val();
    console.log(userGuess)
    checkAnswer();
}
// //listen for user to click an answer and then run checkAnswer

//start game
function startGame() {
    numCorrect=0;
    numIncorrect=0;
    $("#start").remove();
    $("#possibleAnswers").append("<button id='next'>Continue</button>");
    nextQuestion();
}
//push new question to HTML
function nextQuestion() {
    run();
    console.log("test");
    $("#userQuestion").html("<p>" + questions[currentQuestion].question + "</p>");
    $("#first").html("<input type='radio'  name='buttoncollection' id='radio0' value='0'>" + questions[currentQuestion].answers[0] + "</input>");
    $("#second").html("<input type='radio' name='buttoncollection' id='radio1'value='1'>" + questions[currentQuestion].answers[1] + "</input>");
    $("#third").html("<input type='radio' name='buttoncollection' id='radio2' value='2'>"+ questions[currentQuestion].answers[2] + "</input>");
    $("#fourth").html("<input type='radio' name='buttoncollection' id='radio3' value='3'>" + questions[currentQuestion].answers[3] + "</input>");
    //$("#possibleAnswers").append("<button id='next'>Continue</button>");


}

//if user answer is the same as the answers[correctAnswer], then user wins




//tallies score whenever user has answered all the questions

//sets timer that cuts user off and tallies their score whenever time is up

