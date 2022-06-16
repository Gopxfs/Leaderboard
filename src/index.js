import './scss/index.css';
import API from './modules/API.js';

// gameID = 'EUPt0FcF5NjJxFAETzlU';
const api = new API();
const submitScore = document.getElementById('submitScore');
const refreshButton = document.getElementById('refreshButton');
const scores = document.getElementById('scores');

const getScores = async () => {
  const score = await api.getGameScore();
  return score;
};
let gameScore = [];

submitScore.addEventListener('submit', () => {
  const playerName = document.getElementById('playerName');
  const playerScore = document.getElementById('playerScore');
  api.addNewScore(playerName.value, playerScore.value);
  return false;
});

const populateScores = async (index) => {
  gameScore = await getScores();
  for (let i = index; i < gameScore.result.length; i += 1) {
    const newScore = document.createElement('li');
    newScore.innerHTML = `${gameScore.result[i].user}: ${gameScore.result[i].score}`;
    scores.append(newScore);
  }
};
populateScores(0);

refreshButton.addEventListener('click', async () => {
  const howManyScoresBeforeRefreshing = gameScore.result.length;
  populateScores(howManyScoresBeforeRefreshing);
});