class Game{

    static all = []

    constructor({id, title, description, score, img, list_id}){
        this.id = id
        this.title = title
        this.description = description
        this.score = score
        this.img = img
        this.list_id = list_id
        Game.all.push(this)
    }

    static getGames(id){
        fetch(port + `/lists/${id}/games`)
        .then(resp => resp.json())
        .then(gameData => {
            gameData.forEach(game => {
                
                if(game.list_id === parseInt(id)){
                let newGame = new Game(game)
                newGame.addToDom()
                }
            })
        })
    }

    addToDom(){
        let innerCont = document.createElement("div")
        innerCont.id = "card"
        gameCont.appendChild(innerCont).innerHTML = `
            <img src=${this.img}>
            <h3><b>${this.title}</b></h3>
            <p>${this.description}</p>
        `
    }

}