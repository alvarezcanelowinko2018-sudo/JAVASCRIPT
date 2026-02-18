class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const cinderellas = [
    new Cinderella('Anna', 18, 35),
    new Cinderella('Olga', 19, 36),
    new Cinderella('Maria', 20, 37),
    new Cinderella('Kate', 21, 38),
    new Cinderella('Nina', 22, 39),
    new Cinderella('Ira', 18, 34),
    new Cinderella('Sofia', 23, 40),
    new Cinderella('Lenu', 24, 36),
    new Cinderella('Oksana', 25, 37),
    new Cinderella('Diana', 19, 38)
];
class Prince {
    constructor(name, age, foundShoeSize, preferredAge) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
        this.preferredAge = preferredAge;
    }

    findCinderella(girls) {
        return girls.find(girl =>
            girl.footSize === this.foundShoeSize &&
            girl.age === this.preferredAge
        );
    }
}
const prince = new Prince('Volodymyr', 25, 36, 24);
const meeting = prince.findCinderella(cinderellas);

if (meeting) {
    console.log(`Принц ${prince.name} знайшов ${meeting.name}`);
} else {
    console.log('Попелюшка не знайдена');
}
