/*jshint esversion: 6*/
class Elevator {
    constructor(floor, MAXFLOOR, requests) {
        this.floor = 0;
        this.MAXFLOOR = 10;
        this.requests = [];
    }

    start() {
        setInterval(() => update(), 1000);
    }

    stop() {
        clearInterval(start.setInterval);
    }

    update() {
        this.log();
    }
    _passengersEnter() {}
    _passengersLeave() {}

    floorUp() {
        if (this.floor < this.MAXFLOOR) {
            this.floor ++;
        }
        console.log(this.floor);
    }
    // floorUp(floor) {     if (floor < Elevator.MAXFLOOR) {         floor += 1; } }
    floorDown() {
        if (Elevator.floor > 0) {
            Elevator.floor -= 1;
        }
        console.log(Elevator.floor);
    }
    // floorDown(floor) {     if (floor > 0) {         floor -= 1;     } }
    call() {}
    log(direction, floor) {
        console.log(`Direction: ${direction} | Floor: ${floor}`);
    }
}

module.exports = Elevator;
