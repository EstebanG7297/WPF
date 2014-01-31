/**
 * Created by Aeirus on 1/30/14.
 */

var heightFT;
var heightIN;
var weight;
var bmi;

heightFT = parseInt(prompt("What is your height in feet? (rounded down)"));
heightIN = parseInt(prompt("What are the remaining inches (from before)"));
weight = parseInt(prompt("What is your weight in pounds"));

function bmiCal(heightft,heightinch,weight){

    var bmi;

    heightft = heightft * 12;
    heightinch = heightinch + heightft;
    heightinch = heightinch * heightinch;

    weight = weight / heightinch;

    bmi = Math.floor(weight * 703);

    return bmi;
}

bmi = bmiCal(heightFT,heightIN,weight);

console.log("your bmi is " + bmi);

function ideaWeight(heightft,heightinch){

    var idealBMI = 21 / 703;

    heightft = heightft * 12;
    heightinch = heightinch + heightft;
    heightinch = heightinch * heightinch;

    idealBMI = Math.floor(idealBMI * heightinch);

    return idealBMI;
}

if(bmi>30){console.log("you are obese. You're ideal weight is " + ideaWeight(heightFT,heightIN) + " pounds")}
else if(bmi<29.99 && bmi>25){console.log("you are over weight. You're ideal weight is " + ideaWeight(heightFT,heightIN) + " pounds")}
else if(bmi<24.9 && bmi>18.6){console.log("you are your ideal weight")}
else if(bmi<18.5 && bmi>18){console.log("you are thin for your height. You're ideal weight is " + ideaWeight(heightFT,heightIN) + " pounds")}
else {console.log("you are underweight. You're ideal weight is " + ideaWeight(heightFT,heightIN) + " pounds")};