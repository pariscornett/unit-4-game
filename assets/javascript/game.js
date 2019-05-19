$(document).ready(function(){
//set global variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var numberToGuess;
var basilClick;
var cloveClick;
var dillClick;
var sageClick;


//randomize the number for the player to guess 
var numberToGuess = 19+ Math.floor(Math.random() * 100); 


//display that number for the user to see
$("#targetNumber").html(numberToGuess);

//randomize the number for each icon
var basilClick = 1 + Math.floor(Math.random()* 12);  
var cloveClick = 1 + Math.floor(Math.random()* 12);
var dillClick = 1 + Math.floor(Math.random()* 12);
var sageClick = 1 + Math.floor(Math.random()* 12);

//make game reset with wins and losses without refreshing page
function resetGame() {
basilClick = 1 + Math.floor(Math.random()* 2);    
cloveClick = 1 + Math.floor(Math.random()* 2);
dillClick = 1 + Math.floor(Math.random()* 2);
sageClick = 1 + Math.floor(Math.random()* 2);
numberToGuess = 1+ Math.floor(Math.random() * 10);
$("#targetNumber").html(numberToGuess);
totalScore = 0;
}

function update() {
    if (totalScore == numberToGuess) {
        wins++
        //record wins and losses in DOM
        $(".wins").html("Wins = " + wins);
        resetGame();
    } else if (totalScore > numberToGuess){
        losses++
        //record wins and losses in DOM
        $(".losses").html("Losses = " + losses);
        resetGame();
    }
}


//make icons clickable
$(".basil").click(function(){
    console.log (totalScore, numberToGuess)
    //add up score and store it in the var totalScore
   totalScore += basilClick;
    //erase previous score from DOM
    $(".score").empty();
    //display current score
    $(".score").append("Your Score: " +totalScore);
    //call function update
    update();
});

$(".clove").click(function() {
    console.log (totalScore, numberToGuess)
   totalScore += cloveClick;
    $(".score").empty();
    $(".score").append("Your Score: " +totalScore);
    update();
});

$(".dill").click(function() {
    console.log (totalScore, numberToGuess)
   totalScore += dillClick;
    $(".score").empty();
    $(".score").append("Your Score: " +totalScore);
    update();
});

$(".sage").click(function() {
    console.log (totalScore, numberToGuess)
   totalScore += sageClick;
    $(".score").empty();
    $(".score").append("Your Score: " +totalScore);
    update();
});
    }
);
