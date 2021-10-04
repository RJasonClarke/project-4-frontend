const port = 'http://127.0.0.1:3000'
const listCont = document.getElementById("list-container")
const gameCont = document.getElementById("game-container")
const listBtns = document.getElementById("list-btns")
const gameBtns = document.getElementById("game-btns")
const gameForm = document.getElementById("game-form")

document.addEventListener("DOMContentLoaded", function(){
    List.getLists()
})