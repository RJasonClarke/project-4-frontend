class Game{

    constructor({id, title, description, img, list_id}){
        this.id = id
        this.title = title
        this.description = description
        this.img = img
        this.list_id = list_id
    }

    static fetchGames(listId){
        fetch(port + `/lists/${listId}/games`)
        .then(resp => resp.json())
        .then(gameData => {
            gameData.forEach(game => {
                let newGame = new Game(game)
                if(game.list_id === listId){
                    newGame.addToDom()
                }
            })
        })
    }

    static createGame(){
        event.preventDefault()
        let title = document.getElementById("game-title").value
        let description = document.getElementById("game-description").value
        let img = document.getElementById("game-image").value
        let list_id = document.getElementById("list_id").value
        let gameObject = {
            title: title,
            description: description,
            img: img,
            list_id: list_id
        }
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(gameObject)
        }

        fetch(port + `/games`, config)
        .then(resp => resp.json())
        .then(gameData => {
            let newGame = new Game(gameData)
            newGame.addToDom()
            gameForm.style.display = "none"
            newGameBtn.style.display = ""
        })
    }

    static deleteGame(){
        const id = event.target.id
        event.target.parentElement.remove()
        fetch(port + `/games/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }

    static showForm(){
        newGameBtn.addEventListener("click", () => {
            gameBtns.style.display="none"
            gameForm.style.display=""
        }) 
        gameForm.addEventListener("submit", Game.createGame)
    }

    handleClick() {
        if(event.target.innerText === "Delete"){
            Game.deleteGame()
        }
    }

    addToDom(){
        let gameElement = document.createElement("div")
        gameElement.id = `${this.id}`
        gameCont.appendChild(gameElement).innerHTML =
        `
        <img src=${this.img}>
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <input type="hidden" value=${this.list_id} id="list_id">
        <button id=${this.id}>Delete</button>
        `

        gameCont.addEventListener("click", this.handleClick)
    }
}