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
    totalScore += basilClick;
    $(".score").append(totalScore);
});
$(".clove").click(function() {
    totalScore += cloveClick;
    $(".score").append(totalScore);
});

$(".dill").click(function() {
    totalScore += dillClick;
    $(".score").append(totalScore);
});

$(".sage").click(function() {
    totalScore += sageClick;
    $(".score").append(totalScore);
});

console.log(basilClick);
console.log(cloveClick);
console.log(dillClick);
console.log(sageClick);

//code randomized numbers to add up 
    //whenever an icon is clicked, add its random value to the totalScore
    
if (totalScore > 0) {
    
}

//store added numbers in score, display in DOM



//set conditions for winning and losing
if (totalScore == numberToGuess) {
    wins++;
} else if (totalScore > numberToGuess){
    losses++;
}




//record wins and losses in DOM




//make game reset with wins and losses without refreshing page


//when game resets, reset randomized number for user to guess && re-randomize the icon numbers