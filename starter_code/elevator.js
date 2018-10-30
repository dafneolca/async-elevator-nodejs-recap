/*jshint esversion: 6*/
class Elevator {
    constructor(floor, MAXFLOOR, requests) {
        this.floor = 0;
        this.MAXFLOOR = 10;
        this.waitingList = [];
        this.passengers = [];
        this.requests = [];
        this.direction = "";
    }

    start() {
        setInterval(() => update(), 1000);
    }

    stop() {
        clearInterval(start.setInterval());
    }

    update() {
        this.log(this.direction, this.floor);
    }

    _passengersEnter() {
        if (this.waitingList.length > 0) {
            let personEntering = this.waitingList.filter(passenger => passenger.originFloor === this.floor);
            for (let i = 0; i <= personEntering.length; i++) {
                this.passengers.push(personEntering[i]);
                //find error
                this.requests.push(personEntering[i].destinationFloor);
                console.log(`${personEntering[i].name} has just entered the elevator.`);
            }
            this.waitingList.filter(passenger => passenger.originFloor !== this.floor);
        }
    }

    _passengersLeave() {

        let personLeaving = this.passenger.filter(passenger => passenger.destinationFloor === this.floor);
        for (let i = 0; i <= personLeaving.length; i++) {
            console.log(`${person.name} has just entered the elevator.`);
            this.passengers.push(personEntering[i]);
            this.requestspush(personEntering[i].destinationFloor);
        }
        this.passenger.filter(passenger => passenger.destinationFloor !==this.floor);
    }

    floorUp() {
        if (this.floor < this.MAXFLOOR) {
            this.floor++;
            this.direction="Up";
        }
        console.log(this.floor);
    }
    floorDown() {
        if (Elevator.floor > 0) {
            Elevator.floor -= 1;
            this.direction="Down";
        }
        console.log(Elevator.floor);
    }
    call(person) {
        this
            .requests
            .push(person.originFloor);
        this
            .waitingList
            .push(person);
    }

    log(direction, floor) {
        console.log(`Direction: ${direction} | Floor: ${floor}`);
    }

}

module.exports = Elevator;
