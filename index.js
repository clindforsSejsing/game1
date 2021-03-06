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
        batmanChoice = "ðª¨";
    }
    if (randomNumber === 2) {
        batmanChoice = "âï¸";
    }
    if (randomNumber === 3) {
        batmanChoice = "ðï¸";
    }
    batmanChoiceDisplay.innerHTML = batmanChoice;
}

function getResult() {
    if (batmanChoice === userChoice) {
        result = 'âï¸Lika'
    }
    if (batmanChoice === 'ðª¨' && userChoice === 'âï¸') {
        result = 'ð¦Batman vann';
    }
    if (batmanChoice === 'ðª¨' && userChoice === 'ðï¸') {
        result = 'ðDu vann';
    }
    if (batmanChoice === 'âï¸' && userChoice === 'ðª¨') {
        result = 'ðDu vann';
    }
    if (batmanChoice === 'âï¸' && userChoice === 'ðï¸') {
        result = 'ð¦Batman vann';
    }
    if (batmanChoice === 'ðï¸' && userChoice === 'âï¸') {
        result = 'ðDu vann';
    }
    if (batmanChoice === 'ðï¸' && userChoice === 'ðª¨') {
        result = 'ð¦Batman vann!';
    }
    if (userChoice === 'ð¦-âï¸' || userChoice === 'ð©-ð') {
        result = 'ðDu vann'
    }


    resultDisplay.innerHTML = result;
}