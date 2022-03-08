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
        batmanChoice = "🪨";
    }
    if (randomNumber === 2) {
        batmanChoice = "✂️";
    }
    if (randomNumber === 3) {
        batmanChoice = "🛍️";
    }
    batmanChoiceDisplay.innerHTML = batmanChoice;
}

function getResult() {
    if (batmanChoice === userChoice) {
        result = 'Jämt!'
    }
    if (batmanChoice === '🪨' && userChoice === '✂️') {
        result = '🦇Batman vann!';
    }
    if (batmanChoice === '🪨' && userChoice === '🛍️') {
        result = '🥳Du vann!';
    }
    if (batmanChoice === '✂️' && userChoice === '🪨') {
        result = '🥳Du vann!';
    }
    if (batmanChoice === '✂️' && userChoice === '🛍️') {
        result = '🦇Batman vann!';
    }
    if (batmanChoice === '🛍️' && userChoice === '✂️') {
        result = '🥳Du vann!';
    }
    if (batmanChoice === '🛍️' && userChoice === '🪨') {
        result = '🦇Batman vann!';
    }
    if (userChoice === '🔦-✂️' || userChoice === '💩-🍕') {
        result = '🥳 Du vann!'
    }


    resultDisplay.innerHTML = result;
}