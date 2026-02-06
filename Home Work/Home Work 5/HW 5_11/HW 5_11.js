let sum = items => {
    let all = 0;
    for (let item of items) {
        all = all + item;
    }
    return all;
}
console.log((sum([12,45,987])));
