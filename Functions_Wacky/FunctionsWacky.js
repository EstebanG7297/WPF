/**
 * Created by Aeirus on 1/30/14.
 */

var kidNum = []; //initiates the array to hold the kids and their age
var kidFight; //initiate variable to tell who won

var stop = parseInt(prompt("How many kids do you want to use?")); //asks user for # of kids
var min = parseInt(prompt("what's the minimum age?")); //asks user to provide the minimum age of kid
var max = parseInt(prompt("what's the max age?")); //asks user to provide maximum age of kids

function generateKids(stop,min,max,kids){
    for(var i=0;i<stop;i++){  //loops for as long as the player told it to
        kids[i]=Math.floor(Math.random()*max)+min; //assigns kids a random value between the ages specified
    }

    return kids; //sends back the kid array
}

kidNum = generateKids(stop,min,max,kidNum); //stores the array with the kid information in it

function kidSet(kids){
    var temp; //temporary variable needed to hold the average of kids
    var upperKids =[]; //an array that will be used to store the kids older than the average
    var lowerKids = []; //an array that holds the kids who are younger than the average
    for(var i=0;i<kids.length;i++){temp=temp+kids[i];} //loops for the length of the array before. Adds up all the kids
    temp = temp / kids.length;//gets the average of the kids age

    for(var k=0;k<kids.length;k++){
        if(kids[i]<temp){lowerKids.push(kids[i])} //if the kids are younger they are added to the younger kid array
        else if(kids[i]==temp){lowerKids.push(kids[i])} //when a kid meets the average head on it will also be added to the younger kid array
        else{upperKids.push(kids[i])} //older kids are sorted into their own array
    }

    if(upperKids.length>lowerKids.length){return 0} //if there are more older kids than younger start circumstance 1
    else if(upperKids.length==lowerKids.length){return 1} //if there are equal amount of kids start circumstance 2
    else{return 2} //if there are more young kids start circumstance 3

}

kidFight = kidSet(kidNum); //gets information on which circumstance to run

if(kidFight==0){console.log("Your kids broke out into a fight and the older ones beat up the younger ones");} //displays circumstance 1
else if(kidFight==1){console.log("Your kids started fighting but they were too evenly matched");} //displays circumstance 2
else {console.log("Your kids broke out into a fight. Get this. The younger kids won")} //displays circumstance 3