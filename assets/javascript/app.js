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



function grabGuess() {
    userGuess = $("input:checked").val();
    console.log(userGuess)
    checkAnswer();
}
     
 



//move on to next question whenever user picks an answer; increase currentQuestion?



$(document).on("click", "#next", function(){

    currentQuestion++;
    grabGuess();
    nextQuestion();

});

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
    
    $("#userQuestion").html("<p>" + questions[currentQuestion].question + "</p>");
    $("#first").html("<input type='radio' id='radio0' value='0'>" + questions[currentQuestion].answers[0] + "</input>");
    $("#second").html("<input type='radio' id='radio1'value='1'>" + questions[currentQuestion].answers[1] + "</input>");
    $("#third").html("<input type='radio' id='radio2'value='2'>"+ questions[currentQuestion].answers[2] + "</input>");
    $("#fourth").html("<input type='radio' id='radio3'value='3'>" + questions[currentQuestion].answers[3] + "</input>");
    //$("#possibleAnswers").append("<button id='next'>Continue</button>");


}

//if user answer is the same as the answers[correctAnswer], then user wins
function checkAnswer(){
    if (parseInt(userGuess) === questions[currentQuestion].correctAnswer) {
        numCorrect++;
        console.log("number right: "+numCorrect);
    }

    else {
        numIncorrect++;
        console.log("number wrong:" + numIncorrect);
    }

    
}



//tallies score whenever user has answered all the questions

//sets timer that cuts user off and tallies their score whenever time is up

