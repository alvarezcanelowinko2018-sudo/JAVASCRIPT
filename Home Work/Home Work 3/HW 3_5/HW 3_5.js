let listofitems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)

    for (const item of listofitems) {

        document.write
        (`<li>${item}</li>`);
    }

document.write(`</ul>`);

