function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

const clients = [
    new Client(1, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', [{title: 'tv', price: 22}, {title: 'phone', price: 894768476746}]),
    new Client(2, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(3, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(4, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', [{title: 'tv', price: 42424}, {title: 'phone', price: 14142}, {title: 'phone', price: 44},]),
    new Client(5, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(6, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(7, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', [{title: 'tv', price: 1153534}, {title: 'phone', price: 64356464}, {title: 'phone', price: 224131},]),
    new Client(8, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(9, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(10, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
];


const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);
