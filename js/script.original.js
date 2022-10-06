const cardsArray = [{
    'name': 'shell',
    'img': 'img/Abyss_Diana_V2.png',
  },
  {
    'name': 'star',
    'img': 'img/Focal_Utopia.png',
  },
  {
    'name': 'bobomb',
    'img': 'img/Beyerdynamic_DT_1990_PRO.jpg',
  },
  {
    'name': 'mario',
    'img': 'img/Audeze_LCD_XC.jpg',
  },
  {
    'name': 'luigi',
    'img': 'img/Audeze_LCD_5.jpg',
  },
  {
    'name': 'peach',
    'img': 'img/Hifiman_Sundara.jpg',
  },
  {
    'name': '1up',
    'img': 'img/Focal_Elegia.png',
  },
  {
    'name': 'mushroom',
    'img': 'img/Dan_Clark_Aeon_Closed.jpg',
  },
  {
    'name': 'thwomp',
    'img': 'img/ZMF_Aolus.jpg',
  },
  {
    'name': 'bulletbill',
    'img': 'img/Sennheiser_800s.jpg',
  },
  {
    'name': 'coin',
    'img': 'img/Sennheiser_HD_600.jpg',
  },
  {
    'name': 'ZMF_Aolus.jpg',
    'img': 'img/Hifiman_Arya.jpg',
  },
];

const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
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
