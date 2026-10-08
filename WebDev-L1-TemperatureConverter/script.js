document.getElementById('convertBtn').addEventListener('click', function() {
    const rawInput = document.getElementById('tempInput').value.trim();
    const inputUnit = document.getElementById('inputUnit').value;
    const errorBox = document.getElementById('errorMessage');
    const resultsBox = document.getElementById('resultsArea');
    const res1 = document.getElementById('res1');
    const res2 = document.getElementById('res2');

    // Reset Elements
    errorBox.classList.add('hidden');
    resultsBox.classList.add('hidden');

    // 1. Validation for Non-Numeric Inputs
    if (rawInput === "" || isNaN(rawInput)) {
        errorBox.textContent = "⚠️ Validation Error: Please input a valid numerical value.";
        errorBox.classList.remove('hidden');
        return;
    }

    const value = parseFloat(rawInput);

    // 2. Checking Absolute Zero Violations
    if ((inputUnit === 'C' && value < -273.15) || 
        (inputUnit === 'F' && value < -459.67) || 
        (inputUnit === 'K' && value < 0)) {
        errorBox.textContent = "⚠️ Physical Constraint Error: Value falls below absolute zero boundaries.";
        errorBox.classList.remove('hidden');
        return;
    }

    // 3. Conversion Matrix Processing
    if (inputUnit === 'C') {
        let fahrenheit = (value * 9/5) + 32;
        let kelvin = value + 273.15;
        res1.textContent = `${fahrenheit.toFixed(2)} °F`;
        res2.textContent = `${kelvin.toFixed(2)} K`;
    } 
    else if (inputUnit === 'F') {
        let celsius = (value - 32) * 5/9;
        let kelvin = celsius + 273.15;
        res1.textContent = `${celsius.toFixed(2)} °C`;
        res2.textContent = `${kelvin.toFixed(2)} K`;
    } 
    else if (inputUnit === 'K') {
        let celsius = value - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;
        res1.textContent = `${celsius.toFixed(2)} °C`;
        res2.textContent = `${fahrenheit.toFixed(2)} °F`;
    }

    resultsBox.classList.remove('hidden');
});
