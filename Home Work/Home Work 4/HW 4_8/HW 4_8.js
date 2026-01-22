function count(elementsarray) {
    document.write(`<ul>`);
    for (const item of elementsarray) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
count([123, 456, 678, true, false, NaN, 'Okten', 'Java']);
