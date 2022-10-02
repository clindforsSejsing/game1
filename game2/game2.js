const cardArray = [
    {
        name: 'badguys',
        img: './img/badguys.png',
    },
    {
        name: 'batman3',
        img: './img/batman3.png',
    },
    {
        name: 'batman4',
        img: './img/batman4.png',
    },
    {
        name: 'batmanjoker',
        img: './img/batmanjoker.png',
    },
    {
        name: 'batmansuperman',
        img: './img/batmansuperman.png',
    },
    {
        name: 'legomovie',
        img: './img/legomovie.png',
    },
    {
        name: 'joker',
        img: './img/joker.png',
    },
    {
        name: 'rabbids',
        img: './img/rabbids.jpg',
    },
    {
        name: 'superman',
        img: './img/superman.jpg',
    },
    {
        name: 'legomovie4',
        img: './img/legomovie4.png',
    },
    {
        name: 'legomovie2',
        img: './img/legomovie2.png',
    },
    {
        name: 'lego',
        img: './img/lego.png',
    },
    {
        name: 'badguys',
        img: './img/badguys.png',
    },
    {
        name: 'batman3',
        img: './img/batman3.png',
    },
    {
        name: 'batman4',
        img: './img/batman4.png',
    },
    {
        name: 'batmanjoker',
        img: './img/batmanjoker.png',
    },
    {
        name: 'batmansuperman',
        img: './img/batmansuperman.png',
    },
    {
        name: 'legomovie',
        img: './img/legomovie.png',
    },
    {
        name: 'joker',
        img: './img/joker.png',
    },
    {
        name: 'rabbids',
        img: './img/rabbids.jpg',
    },
    {
        name: 'superman',
        img: './img/superman.jpg',
    },
    {
        name: 'legomovie4',
        img: './img/legomovie4.png',
    },
    {
        name: 'legomovie2',
        img: './img/legomovie2.png',
    },
    {
        name: 'lego',
        img: './img/lego.png',
    },
]

//a way of mixing the cards up with sort and math random
cardArray.sort(() => 0.5 - Math.random());

const gridMemory = document.querySelector('#grid');

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './img/batman.jpg');
        card.setAttribute('id', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        // console.log(card, i);
        gridMemory.append(card);

    }
}
createBoard();


function checkMatch() {
    let cards = document.querySelectorAll('#grid img');

    console.log('check for match');
    if (cardsChosen[0] == cardsChosen[1]) {
        // alert('a match!');
        cards[cardsChosenId[0]].setAttribute('src', './img/superman.png')
        cards[cardsChosenId[1]].setAttribute('src', './img/superman.png');
        cards[cardsChosenId[0]].removeEventListener('click', flipCard);
        cards[cardsChosenId[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);

    } else {
        cards[cardsChosenId[0]].setAttribute('src', './img/batman.jpg')
        cards[cardsChosenId[1]].setAttribute('src', './img/batman.jpg');
        // alert('försök igen');
    }
    cardsChosen = [];
    cardsChosenId = [];

}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 800)
    }
}
