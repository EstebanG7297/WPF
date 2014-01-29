/**
 * Created by Aeirus on 1/28/14.
 */

var catCount;
var experience;

catCount = prompt("Enter in a number of cats!!"); //asks the user to enter ina  # of cats for catCount
parseInt(catCount);

experience = prompt("Enter in how many years of experience you have juggling!!!"); //asks the user for # of years for experience

var expNeeded = (catCount * 0.33) - experience;

if(expNeeded < 0){  console.log("you masterfully juggled " + catCount + " cats!!!");}
else if(expNeeded == 0){ console.log("Listen Kid, you did alright out there, but get more at juggling experience."); }
else{ console.log("Sorry kid, you're too young to be juggling cats");}