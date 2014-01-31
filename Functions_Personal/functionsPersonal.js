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
