class GameService {
    constructor(port){
        this.port = port
    }

    getGames(){
        fetch(this.port + `/games`)
        .then(resp => resp.json())
        .then(data => {
            for(const game of data){
                let g = new Game(game)
                g.toDom()
            }
        })
        .catch()
    }

    createGames(){
        const gameInfo = {
            game: {
                title: titleValue.value,
                description: descriptionValue.value,
                score: gameScoreValue.value,
                img: imgValue.value,
                list_id: 1
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(gameInfo)
        }
        fetch(this.port + `/games`, configObject)
        .then(resp => resp.json())
        .then(data => {
            const g = new Game(data)
            g.toDom()
        })
    }

    updateGame(game){
        const {title, description, id} = game
        const gameInfo = {
            title,
            description
        }

        const configObject = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(gameInfo)
        }
        fetch(`${this.port}/games/${id}`, configObject)
        .then( game.render() )
    }

    deleteGame(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.port}/games/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}