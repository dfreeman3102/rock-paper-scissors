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
    console.log("Player chose Rock");
} else if (input ==="P"){
 console.log("Player chose Paper");
} else if (input ==="S"){
    console.log("Player chose Scissors");
} else {
    console.log("invalid choice");
}

if(comp === 0){
    console.log("Computer chose Rock");
} else if (comp === 1){
 console.log("Computer chose Paper");
} else if (comp === 2){
    console.log("Computer chose Scissors");
} 


if (input === "R" && comp === 1) {
    console.log("Computer wins");
} else if (input === "R" && comp === 2){
    console.log("Player wins");
} else if (input === "P" && comp === 0){
    console.log("Player wins");
} else if(input === "P" && comp === 2){
    console.log("Computer wins");
} else if(input === "S" && comp === 0){
    console.log("Computer wins");
} else if(input === "S" && comp === 1){
    console.log("Player wins");
} else {
    console.log("Tie, try again");
}



// alert("Stats ");
// confirm("Do you want to play again?");