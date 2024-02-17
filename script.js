//User choice
var input = prompt("Type R, P, S", "R");
// variables for rock, paper, scissors
// var R = 0;
// var P = 1;
// var S = 2;
var playerWins=0;
var compWins=0;
var ties=0;
// code for computer choice

var comp = Math.floor(Math.random() * 3);


// what happens depending on choice

if (input === "R") {
    alert("Player chose Rock");
} else if (input === "P") {
    alert("Player chose Paper");
} else if (input === "S") {
    alert("Player chose Scissors");
} else {
    alert("invalid choice");
}

if (comp === 0) {
    alert("Computer chose Rock");
} else if (comp === 1) {
    alert("Computer chose Paper");
} else if (comp === 2) {
    alert("Computer chose Scissors");
}


if (input === "R" && comp === 1) {
    alert("Computer wins");
    alert("Computer wins: " + compWins + 1);
} else if (input === "R" && comp === 2) {
    alert("Player wins");
    alert("Player wins: " + playerWins + 1);
} else if (input === "P" && comp === 0) {
    alert("Player wins");
    alert("Player wins: " + playerWins + 1);
} else if (input === "P" && comp === 2) {
    alert("Computer wins");
    alert("Computer wins: " + compWins + 1);
} else if (input === "S" && comp === 0) {
    alert("Computer wins");
    alert("Computer wins: " + compWins + 1);
} else if (input === "S" && comp === 1) {
    alert("Player wins");
    alert("Player wins: " + playerWins + 1);
} else {
    alert("Tie, try again");
    alert("Ties: " + ties + 1);
}


// play again or no?
var confirmation = confirm("Play Again?");
if (confirmation == true) {
    location.reload();
}