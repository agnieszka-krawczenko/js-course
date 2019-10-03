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
*/

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