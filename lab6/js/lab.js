/**
 * Author:    Thomas_Castillo
 * Created:   10.19.22
 *
 * (c) Copyright by Public Domain
 **/
console.log("hello world")

 myTransport = ["Car", "Bike", "Carpool", "Bus"];

 myMainRide = {
     make: "Honda",
     model : "Civic",
     color : "Blue",
     year : 2008,
     age : function() {
         return 2022 - age;
     }
 }
 document.writeln("My" + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
     JSON.stringify(myMainRide, null, '\t'), "</pre>");
