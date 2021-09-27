const port = 'http://127.0.0.1:3000/';
const gameCall = new GameService(port);
const form = document.getElementById('game-form')
const titleValue = document.getElementById('game-title')
descriptionValue = document.getElementById('game-description')

gameCall.getGames()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    gameCall.createGames()
}