/*

var youLikeTomato = false;
var myNum = 11;

if (youLikeTomato) {
    document.write("This is tomato soup.");
}
else {
    document.write("You hate tomatos.");
}

if (myNum == 10){
    document.write("   myNum is equal to 10.");
}
else {
    document.write("   myNum isn't equal to 10.");
}



var myAge = 89

if (myAge > 30){
    document.write("  You are over 30!");
} else if (myAge > 20){
    document.write("  You are over 20!");
} else if (myAge > 10) {
    document.write("  You are over 10!");
}  else{
    document.write("  You are not over 10!");  
}



var age = 35
if (age >= 18 && age <=30){
    document.write("   You can come!");
} else {
    document.write("   You aint coming!");
}



var age = 5;

while (age < 10) {
    console.log ("Your age is less than 10");
    age++;
}
document.write("You are now over 10");



var links = document.getElementsByTagName("a");
for (i = 1; i <= links.length ; i++) {

    console.log("this is a link number" + i);

}
document.write("all links now looped");



for ( i = 0; i < 10; i++ ){
    if (i===5 || i===3){
        continue;
    }
    console.log(i);
    if(i === 7) {
        break;
    }
} console.log("I have broken out of the loop");



var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){

    links[i].className = "link-" + i;
}

*/

var a = 2;
var b = 5;

if (isNaN(a)){

    console.log("that isn't a number");

} else{
    console.log("meaning of life is " + (a + b));
}