'use strict';

var cardsArray = [{
  'name': 'shell',
  'img': 'img/funnybunny/bunny_meeting.jpg'
}, {
  'name': 'star',
  'img': 'img/funnybunny/cool_bunny.jpg'
}, {
  'name': 'bobomb',
  'img': 'img/funnybunny/cutie_pie.jpg'
}, {
  'name': 'mario',
  'img': 'img/funnybunny/cutie.jpg'
}, {
  'name': 'luigi',
  'img': 'img/funnybunny/flower_eating_bunny.jpg'
}, {
  'name': 'peach',
  'img': 'img/funnybunny/friends.jpg'
}, {
  'name': '1up',
  'img': 'img/funnybunny/funny_bunnys.jpg'
}, {
  'name': 'mushroom',
  'img': 'img/funnybunny/furry_furry.jpg'
}, {
  'name': 'thwomp',
  'img': 'img/funnybunny/kissi_kissi.jpg'
}, {
  'name': 'bulletbill',
  'img': 'img/funnybunny/little_bunny_jr.jpg'
}, {
  'name': 'coin',
  'img': 'img/funnybunny/little_bun_bun.jpg'
}, {
  'name': 'ZMF_Aolus.jpg',
  'img': 'img/funnybunny/little_bunny.jpg'
}];

var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

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
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
