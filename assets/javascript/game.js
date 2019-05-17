//set global variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var numberToGuess;
var basilClick;
var cloveClick;
var dillClick;
var sageClick;


//randomize the number for the player to guess (set to 1-10 for testing purposes)

var numberToGuess = 1+ Math.floor(Math.random() * 10); //19*100 in future


//display that number for the user to see
$(".randomNumber").append(numberToGuess);

//randomize the number for each icon (set tp 1-2 for testing purposes)
var basilClick = 1 + Math.floor(Math.random()* 2);  //1*12 in future  
var cloveClick = 1 + Math.floor(Math.random()* 2);
var dillClick = 1 + Math.floor(Math.random()* 2);
var sageClick = 1 + Math.floor(Math.random()* 2);

//make icons clickable
$(".basil").click(function() {
    //add up score and store it in the var totalScore
    totalScore += basilClick;
    //erase previous score 
    $(".score").empty();
    //display current score
    $(".score").append("Your Score: " +totalScore);
});
$(".clove").click(function() {
    totalScore += cloveClick;
    $(".score").empty();
    $(".score").append("Your Score: " +totalScore);
});

$(".dill").click(function() {
    totalScore += dillClick;
    $(".score").empty();
    $(".score").append("Your Score: " +totalScore);
});

$(".sage").click(function() {
    totalScore += sageClick;
    $(".score").empty();
    $(".score").append("Your Score: " +totalScore);
});

    
if (totalScore > 0) {
    
}

//store added numbers in score, display in DOM



//set conditions for winning and losing
if (totalScore == numberToGuess) {
    wins++;
    //record wins and losses in DOM
    $(".wins").append(wins);
} else if (totalScore > numberToGuess){
    losses++;
    //record wins and losses in DOM
    $(".losses").append(losses);
}








//make game reset with wins and losses without refreshing page


//when game resets, reset randomized number for user to guess && re-randomize the icon numbers