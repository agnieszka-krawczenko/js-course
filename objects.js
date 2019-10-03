/*
var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxspeed = 50;
myCar.driver = "Aga";
myCar.drive = function(){
    console.log("now driving");
};

myCar.drive();

var myCar2 = {
    maxspeed: 70, 
    driver: "Ted", 
    drive: function(speed, time){
        console.log(speed * time);},
    logDriver: function(){
        console.log("driver name is " + this.driver);
    } 
};

myCar2.logDriver();
console.log(myCar2.maxspeed);
myCar2.drive(50, 3);
var myCar = new Car(50, "Liam");

var Car = function(maxspeed, driver){

    this.maxspeed = maxspeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    },
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Liam");
var myCar2 = new Car(80, "Andrew");
var myCar3 = new Car(25, "George");
var myCar4 = new Car(90, "Bob");

myCar.drive(30,5);
myCar3.logDriver();
*/

var myDate = new Date();

var PastDate = new Date(1965, 11, 16, 15, 35, 46);
var FutureDate = new Date(2025, 2, 26, 5, 25, 48);

console.log(myDate);
console.log(PastDate);
console.log(FutureDate);

var birthday = new Date (1985, 7, 2, 20, 40, 35);
var birthday2 = new Date (1985, 7, 2, 20, 40, 25);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){
    console.log("birthdays are equal");
} else{
    console.log("birthdays are not equal");
}