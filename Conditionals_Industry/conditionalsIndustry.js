/**
 * Created by Aeirus on 1/28/14.
 */

var userPassword; //creates a place to store the user password
var reInput; //creates a place to store the password test
var whileCondition = false; //makes sure that the following while loop will loop

userPassword = prompt("Please create a password"); //user initially sets up value for their password
reInput = userPassword; //the password test then holds onto this information

userPassword = prompt("Please verify your password"); //user then has to re set their value for their password


while(whileCondition==false){
    if(userPassword==reInput){whileCondition=true;} // if they got their password right the loop breaks
    else if(userPassword=="end"){break;} // user can end the program when they so desire
    else{userPassword = prompt("Incorrect. Please re enter your password");} //if they get the password wrong
    //they can attempt to re-enter it
}

