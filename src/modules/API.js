class API {
  addNewScore = (user, score) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EUPt0FcF5NjJxFAETzlU/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });
  }

  getGameScore = () => {
    const score = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/EUPt0FcF5NjJxFAETzlU/scores/')
    .then((response) => response.json());
    return score;
  }

  createGame = (gameName) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: gameName,
      }),
    });
  }
}

export default API;