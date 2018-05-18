//set variables
var numCorrect;
var numIncorrect;
var userGuess;
var answers;
var newQuestion;
var currentQuestion = 0;


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


//if user answer is the same as the answers[correctAnswer], then user wins



//listen for user to click submit button and then run userSubmit

//move on to next question whenever user picks an answer; increase currentQuestion?

$("#next").on("click", function(){

    currentQuestion++;
    console.log(currentQuestion)
    nextQuestion();

});


//start game
function startGame() {
    $("#start").remove();
    $("#userQuestion").html("<p>" + questions[currentQuestion].question + "</p>");
    $("#first").html("<input type='radio'>" + questions[currentQuestion].answers[0] + "</input>");
    $("#second").html("<input type='radio'>" + questions[currentQuestion].answers[1] + "</input>");
    $("#third").html("<input type='radio'>" + questions[currentQuestion].answers[2] + "</input>");
    $("#fourth").html("<input type='radio'>" + questions[currentQuestion].answers[3] + "</input>");
    $("#possibleAnswers").append("<button id='next'>Continue</button>");
}
//push new question to HTML
function nextQuestion() {
  
    $("#userQuestion").html("<p>" + questions[currentQuestion].question + "</p>");
    $("#first").html("<input type='radio'>" + questions[currentQuestion].answers[0] + "</input>");
    $("#second").html("<input type='radio'>" + questions[currentQuestion].answers[1] + "</input>");
    $("#third").html("<input type='radio'>" + questions[currentQuestion].answers[2] + "</input>");
    $("#fourth").html("<input type='radio'>" + questions[currentQuestion].answers[3] + "</input>");
    $("#possibleAnswers").append("<button id='next'>Continue</button>");


}

//tallies score whenever user has answered all the questions

//sets timer that cuts user off and tallies their score whenever time is up

