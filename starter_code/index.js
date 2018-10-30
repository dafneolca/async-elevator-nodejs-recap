/*jshint esversion: 6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();

// elevator.floorUp();
// elevator.floorUp();

let person1 = new Person("Dafne", 2, 3);
let person2 = new Person("Deniz", 2, 4);
let person3 = new Person("EE", 0, 6);

elevator.call(person1);
elevator.call(person2);
elevator.call(person3);

elevator._passengersEnter();

elevator.floorUp();
