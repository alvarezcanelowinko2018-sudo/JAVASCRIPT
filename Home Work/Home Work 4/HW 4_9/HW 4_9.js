function quantity(users) {
    for(const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
quantity([
    {id:1, name:'Viktor', age: 22},
    {id:2, name:'Johnny', age: 32},
    {id:3, name:'Sain', age: 44},
    {id:4, name:'Shein', age: 38},
    ]);
