/**
 * Created by Aeirus on 1/28/14.
 */

var catCount; //creates a place to store # of cats
var experience; //creats a place to store how much experience you have

catCount = prompt("Enter in a number of cats!!"); //asks the user to enter ina  # of cats for catCount
parseInt(catCount);

experience = prompt("Enter in how many years of experience you have juggling!!!"); //asks the user for # of years for experience

var expNeeded = (catCount * 0.33) - experience; //you need 1 year of expereince to juggle 3 cats. This determines how
//your current experience allows you to juggle the # of cats

if(expNeeded < 0){  console.log("you masterfully juggled " + catCount + " cats!!!");} //if your higher than the # of cats needed your a great
//juggler
else if(expNeeded == 0){ console.log("Listen Kid, you did alright out there, but get more at juggling experience."); }
//if you only hit the quota your an ok juggler but need some practice
else{ console.log("Sorry kid, you're too young to be juggling cats");}
//you most likely tossed cats everywhere and lost 3 of them