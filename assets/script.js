// * Create a simple blackjack game with the following properties:

//   * Deals the player a random number between 4 and 21 inclusive.

var dealerTotal = 0
var playerTotal = 0

var numberDealerList = [2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
var numberPlayerList = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

var winningConditions = [21];


   
// prompt user to start game

var playerResponse = confirm ('would you like to play Black Jack?');


//   * Deals a random number between 2 and 11 inclusive to the dealer.


var hit = 1;

var stay = 2;

var unit = Math.floor(Math.random()*9)

// Opton
// var random1 = Math.floor(Math.random() * 21 )
// if(random1 === 1) random1++

//var userNumber = MAth.floor(Math.random() * ( 21 - 4 ) + 4)
// Math.random() -(max-min) +min)

if (playerResponse) {

var busted = false;

while (hit === 1) {
 
    var compChoice = numberPlayerList [Math.floor (Math.random()*numberPlayerList.length)]
    playerTotal+=compChoice
     alert (`Your current score is...':${playerTotal}`);
    var dealerChoice = numberDealerList [ Math.floor (Math.random()*numberDealerList.length)];
    dealerTotal+=dealerChoice;
    if(dealerTotal > 21){
        alert ('game over dealer losses');
       
        break

    } else if (playerTotal> 21){
        alert ('game over player los ses');
      
        break
    }else if(playerTotal === 21){
        alert ('21! player wins');
        break
    }else if(dealerTotal===21){
        alert ('21! Dealer wins!');
        break
    }

   
    
    var hitRequest = prompt ('choose hit (h) or stay (s)');
    
    if (hitRequest === 'h') {
       var hit = 1;
    }
    if (hitRequest === 's') {
        var hit = 2;
        busted = true;
        alert (`the computer chose ${dealerChoice}`);
        console.log(dealerChoice)
        break
     }

}
if(busted){

var diff1 = 21 - dealerTotal
var diff2 = 21 - playerTotal

if (diff1 > diff2){
    alert ('player wins');
}else{
    alert ('dealer wins');
}
}
}
// var compChoice = alert (numberList [Math.floor (Math.random()*numberList.length)+4]);

// var result = compChoice;

// var hitRequest = prompt ('choose hit (h) or stay (s)');

// if (hitRequest === 'h') {
//    var hit = 1;
// }

//     * If the player has 21 they win!
   
//   * Deals a random number between 2 and 11 inclusive to the dealer.


   
//   * If the player hits, add a number between 2 and 11.
   
//     * If the player goes over 21 the lose.
     
//     * If the player has 21, stay for them.
     
//     * Repeat until they choose to stay or they bust
     
//   * Once player stays add a number between 2 and 11 to the dealer's hand.
     
//     * If dealer number is less than 17 add another number
     
//     * Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
     
//     * If dealer goes over 21 they lose.
  
//   * Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!

// * Pseudocode the outline of your game before you write any code.

// * Create functions if you begin to repeat yourself.

// ### Notes

// This is a difficult challenge. How you build this game is up to you. The goal here is to demonstrate when to use functions. If at any point you begin to type the same line of code, or if your code becomes unreadable, consider a function!

// ## Hints

//   * Be sure that your random number generator is inclusive of the outer numbers.
   
//   * We've used a lot of `for` loops. Don't forget that there are other types of loops.