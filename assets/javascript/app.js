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
    $("#timer").show();
    run();
    console.log("test");
    $("#userQuestion").html("<p>" + questions[currentQuestion].question + "</p>");
    $("#first").html("<input type='radio'  name='buttoncollection' id='radio0' value='0'>" + questions[currentQuestion].answers[0] + "</input>");
    $("#second").html("<input type='radio' name='buttoncollection' id='radio1'value='1'>" + questions[currentQuestion].answers[1] + "</input>");
    $("#third").html("<input type='radio' name='buttoncollection' id='radio2' value='2'>"+ questions[currentQuestion].answers[2] + "</input>");
    $("#fourth").html("<input type='radio' name='buttoncollection' id='radio3' value='3'>" + questions[currentQuestion].answers[3] + "</input>");
    //$("#possibleAnswers").append("<button id='next'>Continue</button>");

    
}



//  Timer
    //  Set our number counter to 15.
    var number = 5;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#next").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
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
      number = 5;
      clearInterval(intervalId);
    }


$(document).on("click", "#next", function(){
    grabGuess();
    stop();
    
});

function grabGuess() {
    userGuess = $("input:checked").val();
    console.log(userGuess)
    checkAnswer();
}
// //listen for user to click an answer and then run checkAnswer



//if statement that determines which results page
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

 if (number === 0 && currentQuestion < questions.length){

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        timesUp();
      
        console.log(currentQuestion);

    }   

if (currentQuestion === questions.length){

    stop();
    gameOver();
}
}
//results pages functions

function incorrect(){
stop();
$("#timer").hide();

$("#userQuestion").text("Better Luck Next Time! The correct answer was: "+ questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]);
setTimeout(nextQuestion, 1000 * 3);
}

function correct(){
    $("#timer").hide();

    $("#userQuestion").text("Good Job! The correct answer was: "+ questions[currentQuestion].answers[questions[currentQuestion].correctAnswer]);
    setTimeout(nextQuestion, 1000 * 2);
}

function timesUp(){
    $("#userQuestion").text("Time's Up!");
    currentQuestion++;
    console.log(currentQuestion);
    setTimeout(nextQuestion, 1000 * 2);
}

function gameOver(){
$("#timer").hide();
$("#userQuestion").hide();
$("#possibleAnswers").html("<h1>Game Over!  You got "+numCorrect+" correct and "+numIncorrect+" wrong</h1>");
function startOver(){ location.reload() }
setTimeout(startOver, 1000 * 2);



}
//move on to next question whenever user picks an answer; increase currentQuestion?


//if user answer is the same as the answers[correctAnswer], then user wins




//tallies score whenever user has answered all the questions

//sets timer that cuts user off and tallies their score whenever time is up

