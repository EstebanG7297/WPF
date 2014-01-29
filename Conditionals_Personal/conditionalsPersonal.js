/**
 * Created by Aeirus on 1/28/14.
 */

var myFavNum = Math.floor(Math.random()*5)+1;
var userInput = parseInt(prompt("Try to guess my favorite number!!!"));
var whileCondition = false;

while(whileCondition==false){
if(userInput==myFavNum){console.log("You won!!!");
    break;}
else{ userInput = prompt("Aww no luck. Wanna try again?");
    userInput.toLowerCase();
    if(userInput=="yes"){
        userInput =prompt("ok awesome! try to guess my favorite number");
    }else if (userInput=="no"){console.log("aww poop");
    break}else{console.log("I will take that as a no");
    break;}
        }
}