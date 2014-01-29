/**
 * Created by Aeirus on 1/28/14.
 */

var userPassword;
var reInput;
var whileCondition;

userPassword = prompt("Please create a password");
reInput = userPassword;

userPassword = prompt("Please verify your password");


while(whileCondition==false){
    if(userPassword==reInput){whileCondition=true;}
    else{userPassword = prompt("Incorrect. Please re enter your password");}
}

