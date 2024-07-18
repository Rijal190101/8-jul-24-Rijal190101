// ini js

function updateResult() {
    let weightValue = document.getElementById('input-berat-badan').value;
    console.log(weightValue);
}
document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.querySelector('.button.submit');
    const resetButton = document.querySelector('.button.reset');
    const beratBadanInput = document.getElementById('input-berat-badan');
    const tinggiBadanInput = document.getElementById('input-tinggi-badan');
    const resultSection = document.querySelector('.result-section');
    const resultValue = resultSection.querySelector('h2');
    const resultMessage = resultSection.querySelector('p:nth-of-type(2)');

    submitButton.addEventListener('click', updateResult);
    resetButton.addEventListener('click', resetForm);

    function updateResult() {
        const beratBadan = parseFloat(beratBadanInput.value);
        const tinggiBadanCm = parseFloat(tinggiBadanInput.value);

        if (isNaN(beratBadan) || isNaN(tinggiBadanCm)) {
            alert('Please enter valid values for weight and height.');
            return;
        }

        const tinggiBadanM = tinggiBadanCm / 100;
        const bmi = beratBadan / (tinggiBadanM * tinggiBadanM);
        resultValue.textContent = bmi.toFixed(1);

        let message = '';
        if (bmi < 18.5) {
            message = 'Anda kekurangan berat badan';
        } else if (bmi < 24.9) {
            message = 'Anda memiliki berat badan normal';
        } else if (bmi < 29.9) {
            message = 'Anda memiliki berat badan berlebih';
        } else {
            message = 'Anda mengalami obesitas';
        }

        resultMessage.textContent = message;
    }

    function resetForm() {
        beratBadanInput.value = '';
        tinggiBadanInput.value = '';
        resultValue.textContent = '';
        resultMessage.textContent = '';
    }

});

function openPlayStore() {
    window.open('https://play.google.com/store', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com', '_blank');
}