import './scss/index.css';
import API from './modules/API.js';

const api = new API();
const gameID = 'hM22QmJGo2GlE65TQ6ll';
const submitScore = document.getElementById('submitScore');
const refreshButton = document.getElementById('refreshButton');

submitScore.addEventListener('submit', () => {
  const playerName = document.getElementById('playerName');
  const playerScore = document.getElementById('playerScore');
  api.addNewScore(playerName.value, playerScore.value);
});

refreshButton.addEventListener('click', async () => {
  const gameScore = await api.getGameScore();
  console.log(gameScore);
});