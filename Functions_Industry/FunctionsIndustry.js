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
    var pt1 = Math.floor((username.length%50.85));
    var pt2 = Math.floor((password.length%18.5));
    var pt3 = Math.floor((passhint.length%12.5));

    pt1 = pt1 + "";
    pt2 = pt2 + "";
    pt3 = pt3 + "";

    var uid = pt1 + pt2 + pt3;
    uid = parseInt(uid);
    return uid;
}

UIDN = uidnCreate(username,password,passHint);

while (whileCondition==false){
    console.clear();
    console.log("Hint: " + passHint);
password = prompt("re-Enter your password (/h for your hint | /e to exit program)");
verify = uidnCreate(username,password,passHint);

if(UIDN!=verify){console.log("Incorrect, Please re-try")}
else{console.log("welcome");
    whileCondition = true;
    break;}


}
