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

var numberToGuess = 1 + Math.floor(Math.random() * 10);


//display that number for the user to see
$(".randomNumber").append(numberToGuess);

//randomize the number for each icon
var basilClick = 1 + Math.floor(Math.random()* 2);
var cloveClick = 1 + Math.floor(Math.random()* 2);
var dillClick = 1 + Math.floor(Math.random()* 2);
var sageClick = 1 + Math.floor(Math.random()* 2);

console.log(basilClick);


//make icons clickable



//code randomized numbers to add up 


//store added numbers in score, display in DOM



//set conditions for winning and losing





//record wins and losses in DOM




//make game reset with wins and losses without refreshing page


//when game resets, reset randomized number for user to guess && re-randomize the icon numbers