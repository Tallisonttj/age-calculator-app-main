"use strict";
//pegar itens
let inpDay = document.querySelector('#inpday');
let inpMonth = document.querySelector('#inpmonth');
let inpYear = document.querySelector('#inpyear');
let click = document.querySelector('.click');
let outDay = document.querySelector('.outday span');
let outMonth = document.querySelector('.outmonth span');
let outYear = document.querySelector('.outyear span');
click.addEventListener('click', () => {
    calcular();
});
function calcular() {
    let hasError = false;
    let validday = true;
    let validamonth = true;
    let validayer = true;
    let day = parseInt(inpDay.value);
    let month = parseInt(inpMonth.value);
    let year = parseInt(inpYear.value);
    const dataAtual = new Date();
    let labelE = document.querySelectorAll('label');
    labelE.forEach((label) => label.classList.remove('labelError'));
    let errors = document.querySelectorAll('.error');
    errors.forEach((error) => error.remove());
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input) => input.style.borderColor = 'var(--Offblack)');
    inputs.forEach((i) => {
        if (i.value === '') {
            i.style.borderColor = 'var(--Lightred)';
            let label = i.parentNode;
            label.classList.add('labelError');
            let error = document.createElement('p');
            error.textContent = 'Campo obrigatorio';
            error.classList.add('error');
            i.after(error);
            hasError = true;
            validayer = false;
            validamonth = false;
            validday = false;
        }
    });
    if (day < 1 || day > 31) {
        inpDay.style.borderColor = 'var(--Lightred)';
        let label = inpDay.parentNode;
        label.classList.add('labelError');
        let error = document.createElement('p');
        error.textContent = 'Dia informado não é valido';
        error.classList.add('error');
        inpDay.after(error);
        hasError = true;
        validday = false;
    }
    if (month < 1 || month > 12) {
        inpMonth.style.borderColor = 'var(--Lightred)';
        let label = inpMonth.parentNode;
        label.classList.add('labelError');
        let error = document.createElement('p');
        error.textContent = 'Mês informado não é valido';
        error.classList.add('error');
        inpMonth.after(error);
        hasError = true;
        validamonth = false;
    }
    if (month == 4 && day > 30 || month == 6 && day > 30 || month == 9 && day > 30 || month == 11 && day > 30 ||
        month == 2 && day > 29 && year % 4 === 0 ||
        month == 2 && day > 28 && year % 4 !== 0) {
        inputs.forEach((input) => input.style.borderColor = 'var(--Lightred)');
        labelE.forEach((label) => label.classList.add('labelError'));
        let error = document.createElement('p');
        error.innerHTML = `Dia informado não é <br> valido para o mês`;
        error.classList.add('error');
        inpDay.after(error);
        hasError = true;
        validday = false;
    }
    if (year > dataAtual.getFullYear()) {
        inpYear.style.borderColor = 'var(--Lightred)';
        let label = inpYear.parentNode;
        label.classList.add('labelError');
        let error = document.createElement('p');
        error.textContent = 'Ano informado não é valido';
        error.classList.add('error');
        inpYear.after(error);
        hasError = true;
        validayer = false;
    }
    if (!hasError && validayer && validamonth && validday) {
        calc();
    }
    else {
        outDay.textContent = '--';
        outMonth.textContent = '--';
        outYear.textContent = '--';
    }
    function calc() {
        outDay.textContent = `${Math.abs(dataAtual.getDate() - day)}`;
        outMonth.textContent = `${Math.abs((dataAtual.getMonth() + 1) - month)}`;
        outYear.textContent = `${Math.abs(dataAtual.getFullYear() - year)}`;
    }
}
