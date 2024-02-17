//User choice
var input = prompt("Type R, P, S");

// variables for rock, paper, scissors
// var R = 0;
// var P = 1;
// var S = 2;

// code for computer choice

var comp = Math.floor(Math.random() * 3);


// what happens depending on choice

if(input ==="R"){
    alert("Player chose Rock");
} else if (input ==="P"){
 alert("Player chose Paper");
} else if (input ==="S"){
    alert("Player chose Scissors");
} else {
    alert("invalid choice");
}

if(comp === 0){
   alert("Computer chose Rock");
} else if (comp === 1){
 alert("Computer chose Paper");
} else if (comp === 2){
    alert("Computer chose Scissors");
} 


if (input === "R" && comp === 1) {
    alert("Computer wins");
} else if (input === "R" && comp === 2){
    alert("Player wins");
} else if (input === "P" && comp === 0){
   alert("Player wins");
} else if(input === "P" && comp === 2){
    alert("Computer wins");
} else if(input === "S" && comp === 0){
    alert("Computer wins");
} else if(input === "S" && comp === 1){
    alert("Player wins");
} else {
    alert("Tie, try again");
}


// play again or no?
var confirmation = confirm("Play Again?");
if(confirmation==true){
    location.reload();
}