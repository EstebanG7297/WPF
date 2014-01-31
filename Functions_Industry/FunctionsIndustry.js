/**
 * Created by Aeirus on 1/30/14.
 */

var username = prompt("Enter a username");
var password = prompt("Enter a password");
var passHint = prompt("Enter a hint for your password");
var UIDN; //stands for unique identification number
var verify;
var whileCondition = false;

function uidnCreate(username,password,passhint){
    var pt1 = Math.floor((Math.random()*username.length));
    var pt2 = Math.floor((Math.random()*password.length));
    var pt3 = Math.floor((Math.random()*passhint.length));

    pt1 = pt1 + "";
    pt2 = pt2 + "";
    pt3 = pt3 + "";

    var uid = pt1 + pt2 + pt3;
    uid = parseInt(uid);
    return uid;
}

UIDN = uidnCreate(username,password,passHint);

while (whileCondition==false){
username = prompt("re-Enter your username (/h for your hint | /e to exit program)");
password = prompt("re-Enter your password (/h for your hint | /e to exit program)");

verify = uidnCreate(username,password,passHint);

if(UIDN!=verify){console.log("Incorrect, Please re-try")}
else if(username.toLowerCase()=="/e"||password.toLowerCase()=="/e"){
    whileCondition = true;
    break;}
else if(username.toLowerCase()=="/h"||password.toLowerCase()=="/h"){
    console.log(passHint);
}
else{console.log("welcome");
    whileCondition = true;
    break;}


}
