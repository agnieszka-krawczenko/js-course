/* some simply examples of if statements

var youLikeTomato = false;
var myNum = 11;

if (youLikeTomato) {
    document.write("This is tomato soup.");
}
else {
    document.write("You hate tomatos.");
}

if (myNum == 10){
    document.write(" myNum is equal to 10");
}
else {
    document.write(" myNum isn't equal to 10");
}
*/

var myAge = 89

if (myAge > 30){
    document.write("You are over 30!");
} else if (myAge > 20){
    document.write("You are over 20!");
} else if (myAge > 10) {
    document.write("You are over 10!");
}  else{
    document.write("You are not over 10!");  
}