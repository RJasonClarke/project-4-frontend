const port = 'http://127.0.0.1:3000'
const listCont = document.getElementById("list-container")
const gameCont = document.getElementById("game-container")
const newListBtn = document.getElementById("new-list")
const gameBtns = document.getElementById("game-btns")
const newGameBtn = document.getElementById("new-game")
const deleteGameBtn = document.getElementById("delete-btn")

const listForm = document.getElementById("list-form-cont")
const listSubmit = document.getElementById("list-form")

const gameForm = document.getElementById("game-form-cont")
const gameSubmit = document.getElementById("game-form")

document.addEventListener("DOMContentLoaded", function(){
    List.fetchLists()
    List.showForm()
    Game.showForm()
})