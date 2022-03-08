const batmanChoiceDisplay = document.getElementById('computerC');
const userChoiceDisplay = document.getElementById('userC');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let batmanChoice;
let result;

possibleChoices.forEach(button => button.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateBatmanChoice();
    getResult();
}));

function generateBatmanChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    // console.log(randomNumber);

    if (randomNumber === 1) {
        batmanChoice = "sten";
    }
    if (randomNumber === 2) {
        batmanChoice = "sax";
    }
    if (randomNumber === 3) {
        batmanChoice = "påse";
    }
    batmanChoiceDisplay.innerHTML = batmanChoice;
}

function getResult() {
    if (batmanChoice === userChoice) {
        result = 'Ingen vann!'
    }
    if (batmanChoice === 'sten' && userChoice === 'sax') {
        result = '🦇Batman vann!';
    }
    if (batmanChoice === 'sten' && userChoice === 'påse') {
        result = '🥳Du vann!';
    }
    if (batmanChoice === 'sax' && userChoice === 'sten') {
        result = '🥳Du vann!';
    }
    if (batmanChoice === 'sax' && userChoice === 'påse') {
        result = '🦇Batman vann!';
    }
    if (batmanChoice === 'påse' && userChoice === 'sax') {
        result = '🥳Du vann!';
    }
    if (batmanChoice === 'påse' && userChoice === 'sten') {
        result = '🦇Batman vann!';
    }
    if (userChoice === 'laser-sax' || userChoice === 'bajs-pizza') {
        result = '🥳 Du vann!'
    }

    resultDisplay.innerHTML = result;
}