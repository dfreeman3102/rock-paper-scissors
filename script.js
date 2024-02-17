var input = prompt("Type R, P, S");

// variables for rock, paper, scissors
var R = 0;
var P = 1;
var S = 2;

// code for computer to choose

var comp = Math.floor(Math.random()*3);
console.log(comp);


// what happens depending on choice
if (input === R && comp === P) {
    console.log("Comp wins Comp chose paper");
} else if (input === R && comp === S){
    console.log("Player wins Comp chose scissors");
} else if (input === P && comp === R){
    console.log("Player wins Comp chose rock");
} else if(input === P && comp === S){
    console.log("Comp wins Comp chose scissors");
} else if(input === S && comp === R){
    console.log("Comp wins Comp chose rock");
} else if(input === S && comp === P){
    console.log("Player wins Comp chose Paper");
} else {
    console.log("Tie, both chose same item");
}



// alert("Stats ");
// confirm("Do you want to play again?");