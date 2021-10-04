class List{

    static all = []

    constructor({id, title}){
        this.id = id
        this.title = title

        List.all.push(this)
    }

    static getLists(){
        fetch(port + "/lists")
        .then(resp => resp.json())
        .then(listData => {
            listData.forEach(list => {
                let newList = new List(list)
                newList.addToDom()               
            });
        })
    }

    static eventHandler(e){
        listCont.style.display = "none"
        listBtns.style.display = "none"

        gameCont.style.display = ""
        gameBtns.style.display = ""
        let listId = e.target.id
        Game.getGames(listId)
    }

    addToDom(){
        let innerCont = document.createElement("div")
        listCont.appendChild(innerCont).innerHTML = `
            <h3 id=${this.id}>${this.title}</h3>
        `
        innerCont.addEventListener("click", List.eventHandler)
    }


}