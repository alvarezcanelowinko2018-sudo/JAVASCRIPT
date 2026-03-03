function checkAge() {
    const age = document.getElementById("ageInput").value;
    const result = document.getElementById("result");

    if (age === "") {
        result.textContent = 'Please, write your age!';
        return;
    }
    if (age < 18) {
        result.textContent = 'You are under 18 years old!';
    }else {
        result.textContent = 'You are 18 years old or older';
    }
}
