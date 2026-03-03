const list = [];
for (let i = 1; i <= 100; i++) {
    list.push({
        id: i,
        name: `Об'єкт ${i}`
    });
}
const container = document.getElementById('itemsContainer');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

let page = 1;
const perPage = 10;

function showPage(pageNumber) {
    container.innerHTML = '';
    const start = (pageNumber - 1) * perPage;
    const end = start + perPage;
    const items = list.slice(start, end);
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = item.id + '. ' + item.name;
        container.appendChild(div);
    });
    prev.disabled = pageNumber === 1;
    next.disabled = end >= list.length;
}
prev.addEventListener('click', function () {
    if (page > 1) {
        page--;
        showPage(page);
    }
});
next.addEventListener('click', function () {
    if (page * perPage < list.length) {
        page++;
        showPage(page);
    }
});

showPage(page);
