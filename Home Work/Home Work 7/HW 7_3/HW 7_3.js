function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User (1, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (244, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (3, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (44, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (5888, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (6, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (744, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (8, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (96, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (10, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
];

console.log(users.sort((user1, user2) => user1.id - user2.id));
