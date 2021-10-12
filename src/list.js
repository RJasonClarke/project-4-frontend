class List{
    static all = []

    constructor({id, title}){
        this.id = id
        this.title = title

        List.all.push(this)
    }

    static fetchLists(){
        fetch(port + "/lists")
        .then(resp => resp.json())
        .then(listData => {
            listData.forEach(list => {
                let newList = new List(list)
                newList.addToDom()
                newList.addToDropdown()
            })
        })
    }

    static createList(){
        event.preventDefault()
        let title = document.getElementById("list-title").value
        let listObject = {
            title: title
        }
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(listObject)
        }

        fetch(`${port}/lists`, config)
        .then(resp => resp.json())
        .then(listData => {
            let newList = new List(listData)
            newList.addToDom()
            listForm.style.display = "none"
            newListBtn.style.display = ""
            newGameBtn.style.display = ""
        })
    }

    static deleteList(){
        const id = event.target.id
        event.target.parentElement.remove()
        fetch(port + `/lists/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }

    handleClick(e){
        if(e.target.innerText === "x"){
            List.deleteList(e)
        } else {
            List.showGames()
        }
    }

    static showForm(){
        newListBtn.addEventListener("click", () => {
            newListBtn.style.display="none"
            newGameBtn.style.display="none"
            listForm.style.display=""
        })
        listForm.addEventListener("submit", List.createList)
    }

    static showGames(){
        listCont.style.display = "none"
        gameCont.style.display = ""
        newListBtn.style.display = "none"
        gameBtns.style.display = "none"
        let listId = parseInt(event.target.id)
        Game.fetchGames(listId)
    }

    addToDom(){
        listCont.innerHTML +=
        `
        <div>
        <h2 id=${this.id}>${this.title}</h2>
        <button id=${this.id}>x</button>
        </div>
        `

        listCont.addEventListener("click", this.handleClick)
    }

    addToDropdown(){
        const option = document.createElement("option")
        option.value = this.id
        option.innerText = this.title
        document.getElementById("list_id").appendChild(option)
    }
}