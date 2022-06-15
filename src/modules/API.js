class API {
  
  addNewScore(user, score) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hM22QmJGo2GlE65TQ6ll/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "user": user,
      "score": score,
    }),
    })
  }

  getGameScore() {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hM22QmJGo2GlE65TQ6ll/scores/')
    .then(response => response.json())
  }

  createGame(gameName) {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": gameName,
      }),
    })
  }
}

export default API;