document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    // Perform conversion and display result
    const resultTextarea = document.getElementById('result');
    let result;

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        result = `${temperature} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        result = `${temperature} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius.`;
    }

    resultTextarea.textContent = result;
});

document.getElementById('resetButton').addEventListener('click', function() {
    // Reset input values
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'celsius';

    // Clear result
    document.getElementById('result').textContent = '';
});

document.getElementById('reverseButton').addEventListener('click', function() {
    // Reverse the selected unit
    const unitSelect = document.getElementById('unit');
    unitSelect.value = unitSelect.value === 'celsius' ? 'fahrenheit' : 'celsius';
});
