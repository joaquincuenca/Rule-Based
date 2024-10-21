const redLight = document.getElementById('redLight');
const yellowLight = document.getElementById('yellowLight');
const greenLight = document.getElementById('greenLight');

let timeLeft = 3;
let currentLight = 'red';

function updateTimer() {
    timeLeft -= 1;
    if (timeLeft < 0) {
        changeLights();
        timeLeft = 3;
    }

    if (currentLight === 'red') {
        redLight.textContent = timeLeft;
    } else if (currentLight === 'yellow') {
        yellowLight.textContent = timeLeft;
    } else if (currentLight === 'green') {
        greenLight.textContent = timeLeft;
    }
}


function changeLights() {
    redLight.textContent = '';
    yellowLight.textContent = '';
    greenLight.textContent = '';

    if (currentLight === 'red') {
        redLight.classList.remove('active');
        greenLight.classList.add('active');
        currentLight = 'green';
        greenLight.textContent = timeLeft;
    } else if (currentLight === 'green') {
        greenLight.classList.remove('active');
        yellowLight.classList.add('active');
        currentLight = 'yellow';
        yellowLight.textContent = timeLeft;
    } else if (currentLight === 'yellow') {
        yellowLight.classList.remove('active');
        redLight.classList.add('active');
        currentLight = 'red';
        redLight.textContent = timeLeft;
    }
}

function startTrafficLight() {
    setInterval(updateTimer, 1000);
}

redLight.classList.add('active');
redLight.textContent = timeLeft;
startTrafficLight();
