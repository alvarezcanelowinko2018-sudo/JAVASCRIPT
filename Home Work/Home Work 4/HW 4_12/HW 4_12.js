function swap(arr, i1, i2) {
    if (i1 <  arr.length && i2 <  arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'Danger';
}
console.log(swap([3,55,77,44,99],1, 4));
