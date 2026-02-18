function Car(model, producer, year, maxSpeed, engineVolume) {

    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume = engineVolume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speed) {
        if (speed > 0) this.maxSpeed = this.maxSpeed + speed;
    };
    this.changeYear = function (year) {
        if (year > 2024) this.year = year;
    };

    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    };
}

const car = new Car('Volvo', 'Mercedes', 2025, 290, 2.7);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(300);
car.changeYear(2066);
car.addDriver({});
console.log(car);
