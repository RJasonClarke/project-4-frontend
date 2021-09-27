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
                title: titleValue,
                description: descriptionValue
            }
        }
        fetch(this.port + `/games`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}