/**
 * Created by Aeirus on 1/30/14.
 */

var kidNum = [];

var stop = parseInt(prompt("How many kids do you want to use?"));
var min = parseInt(prompt("what's the minimum age?"));
var max = parseInt(prompt("what's the max age?"));

function generateKids(stop,min,max,kids){
    for(var i=0;i<stop;i++){
        kids[i]=Math.floor(Math.random()*max)+min;
    }

    return kids;
}

kidNum = generateKids(stop,min,max,kidNum);

console.log(kidNum);