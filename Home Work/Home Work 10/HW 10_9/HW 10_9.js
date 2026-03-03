const priceBlock = document.getElementById('priceBlock');

let lastPrice = localStorage.getItem('price') || '100';
let lastTime = localStorage.getItem('lastNewTime') || 0;

const now = Date.now();

if (now - lastTime > 10000) {
    lastPrice = Number(lastPrice) + 10;
    localStorage.setItem('price', lastPrice);
    localStorage.setItem('lastNewTime', now);
}

priceBlock.innerText = lastPrice + 'грн';
