const someForm = document.forms.someForm;

const target = document.getElementById('target');

someForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let object = {nameValue, surnameValue, ageValue};
    console.log(object);
    target.innerText = object.nameValue + ' ' + object.surnameValue + ' ' + object.ageValue;
});





































