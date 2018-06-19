const display = document.getElementById('display');
const cost = document.getElementById('cost');
const input = document.getElementById('input');
const refreshButton = document.getElementById('refresh');

display.innerHTML = input.value;

refreshButton.addEventListener('click', e => {
    display.innerHTML = input.value;
    cost.value = input.value;
});