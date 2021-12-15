'use strict';
// let message=document.querySelector(".message").textContent;
// console.log(message);
// document.querySelector(".message").textContent="Correct number";
// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=20;
// console.log(document.querySelector(".guess").value=20);
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
console.log(score);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
  //REFACTOR
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    //When won
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct number 🎉';
    displayMessage('Correct number 🎉');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
    //When lost
    else {
      // document.querySelector('.message').textContent = 'You lost the game💥';
      displayMessage('You lost the game💥')
      document.querySelector('.score').textContent = 0;
    }
  }
  // //When to high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   //When lost
  //   else {
  //     document.querySelector('.message').textContent = 'You lost the game💥';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';

  //     score -= 1;
  //     console.log(score);
  //     document.querySelector('.score').textContent = score;
  //   }
  //   //When lost
  //   else {
  //     document.querySelector('.message').textContent = 'You lost the game💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
});
