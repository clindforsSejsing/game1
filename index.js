const computerChoiceDisplay = document.getElementById('computerC');
const userChoiceDisplay = document.getElementById('userC');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

possibleChoices.forEach(button => button.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);
    // console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = "Sten";
    }
    if (randomNumber === 2) {
        computerChoice = "Sax";
    }
    if (randomNumber === 3) {
        computerChoice = "Påse";
    }
}

