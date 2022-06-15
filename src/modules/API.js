class API {
  

  // https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ID/scores/

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