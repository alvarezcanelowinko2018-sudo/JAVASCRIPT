let list = (arr, Number1, Number2) => {
    [arr[Number1], arr[Number2]] = [arr[Number2], arr[Number1]];
    return arr;
};

// Приклад використання
const numbers = [11, 22, 33, 44, 55];
console.log(list(numbers, 0, 3)); // [3, 2, 1, 4]
