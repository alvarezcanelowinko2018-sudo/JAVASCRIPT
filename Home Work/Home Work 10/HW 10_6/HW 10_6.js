const input = document.getElementById("weight");
const resultDiv = document.getElementById("result");
input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;
};
