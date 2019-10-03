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
        console.log(speed * time);} 
};

console.log(myCar2.maxspeed);
myCar2.drive(50, 3);