'use strict';
// DOM ELEMENTS
const tempOutput = document.getElementById('output');
const form = document.querySelector('.form');
// Convert btn
const convertBtn = document.getElementById('convert');

// DOM EVENTS
form.addEventListener('submit', function convertTemp(event) {
    event.preventDefault();
    // Find DOM elements
    const tempUnitInput = document.getElementById('temperature-input').value;
    const tempUnitOutput = document.getElementById('temperature-output').value;
    const temInput = parseInt(document.getElementById('input').value);

    // In case of the unit is the same in both inputs
    if (tempUnitInput === tempUnitOutput) {
        tempOutput.value = temInput;
    } else if (tempUnitInput === 'Grados Fahrenheit' && tempUnitOutput === 'Grados Celsius') {
        tempOutput.value = (temInput - 32) * 0.5555;
    } else if (tempUnitInput === 'Grados Celsius' && tempUnitOutput === 'Grados Fahrenheit') {
        tempOutput.value = (temInput * 1.8) + 32;
    } else if (tempUnitInput === 'Grados Celsius' && tempUnitOutput === 'Grados Kelvin') {
        tempOutput.value = (temInput + 273);
    } else if (tempUnitInput === 'Grados Kelvin' && tempUnitOutput === 'Grados Celsius') {
        tempOutput.value = (temInput - 273);
    } else if (tempUnitInput === 'Grados Kelvin' && tempUnitOutput === 'Grados Fahrenheit') {
        tempOutput.value = ((temInput - 273) * 1.8) + 32;
    } else if (tempUnitInput === 'Grados Fahrenheit' && tempUnitOutput === 'Grados Kelvin') {
        tempOutput.value = ((temInput - 32) * 0.5555) + 273;
    } 
});

