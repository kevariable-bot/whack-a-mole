import WhackAMole from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  const land = document.querySelectorAll('.land');
  const btn = document.querySelector('header > button');
  const mouse = document.querySelectorAll('.mouse');
  const score = document.querySelector('.score');
  const audio = document.querySelector('.pop');

  btn.addEventListener('click', () => {
    const initial = new WhackAMole(land, { min: 300, max: 1000 }, mouse, score, audio);
    initial.start();
  });
});
