function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result = 0;
    for (const currency of currencyValues) {
        if (currency.name === exchangeCurrency) {
            result = sumUAH / currency.course;
        }
    }
    return result;
}
const money = [
    {name:'USD', course:44},
    {name:'EURO', course:48},
    {name:'ZŁ', course:11},
];
console.log(exchange(2000,money, 'ZŁ'));

