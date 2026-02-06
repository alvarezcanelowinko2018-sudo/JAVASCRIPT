let count = elementsoflist => {
    document.write(`<ul>`);
    for (const item of elementsoflist) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
count([5464, 345, 987, false, false, NaN, 'Script', 'Java']);
