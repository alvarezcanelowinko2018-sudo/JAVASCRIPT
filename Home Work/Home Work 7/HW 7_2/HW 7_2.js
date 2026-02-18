function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User (1, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (2, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (3, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (4, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (5, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (6, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (7, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (8, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (9, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
    new User (10, 'vova', 'ivanov', 'asddsa.gmail.com', '+3899004433'),
];
const filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);
