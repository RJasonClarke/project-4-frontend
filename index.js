const port = 'http://127.0.0.1:3000/';
const gameCall = new GameService(port);

gameCall.getGames()