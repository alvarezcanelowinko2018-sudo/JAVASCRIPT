Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const arr = [11, 22, 33, 44, 55];
arr.myForEach(function(item, index) {
    console.log(item, index);
});



Array.prototype.myFilter = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const numbers = [111, 222, 333, 444, 555, 666];
const allNumbers = numbers.myFilter(function(num) {
    return num % 2 === 0;
});

console.log(allNumbers);

