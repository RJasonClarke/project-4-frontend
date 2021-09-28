const port = 'http://127.0.0.1:3000';
const gameCall = new GameService(port);
const form = document.getElementById('game-form')
const titleValue = document.getElementById('game-title')
const descriptionValue = document.getElementById('game-description')
const gameScoreValue = document.getElementById('game-score')
const imgValue = document.getElementById('game-image')

gameCall.getGames()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    gameCall.createGames()
}