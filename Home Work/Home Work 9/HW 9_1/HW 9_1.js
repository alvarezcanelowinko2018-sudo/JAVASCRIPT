const div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.textContent = 'Okten';
div.style.fontSize = '30px';

const cloneNode = div.cloneNode(true);
document.body.append(div , cloneNode);
