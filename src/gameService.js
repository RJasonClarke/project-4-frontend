class GameService {
    constructor(port){
        this.port = port
    }

    getGames(){
        fetch(this.port + `/games`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}