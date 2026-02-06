let quantity = users => {
    for(const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
quantity([
    {id:1, name:'Maria', age: 23},
    {id:2, name:'Elsa', age: 77},
    {id:3, name:'Nuri', age: 66},
    {id:4, name:'Cristiano', age: 43},
    {id:5, name:'David', age: 12},
]);
