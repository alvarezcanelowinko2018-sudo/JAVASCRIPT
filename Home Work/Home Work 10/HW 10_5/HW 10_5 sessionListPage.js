const sessionList = JSON.parse(localStorage.getItem('sessionList'));
for (const sessionListElement of sessionList) {
    const div = document.createElement('div');
    div.innerText = sessionListElement.toString();
    document.body.appendChild(div);
}
