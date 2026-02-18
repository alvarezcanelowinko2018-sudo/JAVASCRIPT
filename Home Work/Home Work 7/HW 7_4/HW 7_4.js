function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let client = new Client(1, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']);


const clients = [
    new Client(1, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(2, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(3, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(4, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(5, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(6, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(7, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(8, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(9, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
    new Client(10, 'ivan', 'petrov', 'dad@gmail.com', '+3806624242342341', ['tv', 'laptop']),
];
console.log(clients);







































