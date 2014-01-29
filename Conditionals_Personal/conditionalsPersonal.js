/**
 * Created by Aeirus on 1/28/14.
 */

var myFavNum = Math.floor(Math.random()*5)+1; //chooses a random # every time
var userInput = parseInt(prompt("Try to guess my favorite number!!!")); //gets a # from the user and turns it into an int
var whileCondition = false; //ensure the loop will run

while(whileCondition==false){
if(userInput==myFavNum){console.log("You won!!!"); //win condition has been reached
    break;} //ends the program
else{ userInput = prompt("Aww no luck. Wanna try again?"); //allows the user to determine if they want to play more
    userInput.toLowerCase(); //helps eliminate some user error with caps
    if(userInput=="yes"){
        userInput =prompt("ok awesome! try to guess my favorite number"); //re-begins program
    }else if (userInput=="no"){console.log("aww poop"); //ends the game
    break}else{console.log("I will take that as a no"); //ends the game
    break;}
        }
}