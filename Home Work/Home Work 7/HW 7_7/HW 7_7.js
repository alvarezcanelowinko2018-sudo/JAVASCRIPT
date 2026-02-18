class Car {

    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(speed) {
        if (speed > 0) this.maxSpeed = this.maxSpeed + speed;
    };

    changeYear = function (year) {
        if (year > 1944) this.year = year;
    };

    addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}

const car = new Car('BMW', 'General Motors', 1755, 44, 1.5);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(300);
car.changeYear(1988);
car.addDriver({});
console.log(car);
