function MinValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i <= numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(MinValue([16,44,-77,654,667]));
