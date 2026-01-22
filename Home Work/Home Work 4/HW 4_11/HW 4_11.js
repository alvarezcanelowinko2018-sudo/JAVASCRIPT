function sum(items) {
    let basket = 0;
    for (let item of items) {
        basket = basket + item;
    }
    return basket;
}
console.log((sum([3,55,77])));
