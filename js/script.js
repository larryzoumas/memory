'use strict';

var cardsArray = game_info['cardsArray']
var styleSheet = game_info['name']
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
});
let isCorrectGuess = false;
var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);
let folder = '/img/' + styleSheet + '/question.png'
document.head.insertAdjacentHTML("beforeend", `<style>.front {z-index: 2; background: #FAB942 url(` + folder + `) no-repeat center center / contain;}</style>`)

gameGrid.forEach(function (item) {
    var name = item.name,
        img = item.img;


    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

    var front = document.createElement('div');
    front.classList.add('front');

    var back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

var match = function match() {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.add('match');
    });
};

var resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', function (event) {

    var clicked = event.target;

    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
            new Audio('/mp3/cardflip.mp3').play()
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
            new Audio('/mp3/cardflip.mp3').play()
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                new Audio('/mp3/tada.mp3').play()
                new Audio('/mp3/childyes.mp3').play()
                setTimeout(match, delay);
                setTimeout(function () {
                    $('#questionModal').modal('show'); // opens the modal
                }, delay + 100);
            } else {
                //new Audio('/mp3/awwcute.mp3').play()
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }
});

function checkAnswer() {
    const correctAnswer = "option1"; // replace "option1" with the id of the correct answer
    const selectedAnswer = document.querySelector('input[name="option"]:checked').value;

    if (selectedAnswer === correctAnswer) {
        // If the selected answer is correct, hide the modal
        isCorrectGuess = true; // The guess is correct
        alert('Correct answer! Continue.');
        $('#questionModal').modal('hide');
    } else {
        // If the selected answer is incorrect, print an alert message
        alert('Incorrect answer, please try again.');
    }
}

$('#questionModal').on('hide.bs.modal', function (e) {
    // Check if the modal is being hidden by a user interaction
        if (!isCorrectGuess) {
            console.log('Modal closed without submitting answer, match does not count');
            //alert('Modal closed without submitting answer, match does not count');
            // Insert the logic for match not counting here
            alert('Wait. What? Close the dialog box without answering? No way. You must be punished!')
            location.reload();
            isCorrectGuess = false;
        }
})
