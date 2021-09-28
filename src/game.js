class Game {
    static all = [];
    static cont = document.getElementById("game-container")
    constructor({id, title, description, img, score, list_id}){
        this.id = id
        this.title = title
        this.description = description
        this.img = img
        this.score = score
        this.list=id = list_id
        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `game`
        this.element.addEventListener('click', this.handleClick)
        Game.all.push(this)
    } 

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <img src=${this.img} alt=${this.title}>
        <h3 class='title'>${this.title}</h3>
        <p class='score'>Score: ${this.score}</p>
        <p class='description'>${this.description}</p>
        </div>
        <button class='edit-btn' data-id=${this.id}>Edit</button>
        <button class='delete-btn' data-id=${this.id}>Delete</button>
        `
        return this.element
    }

    createEditForm(){
        const div = this.element.querySelector('div')
        for(const element of div.children){
            let inputValue = element.innerText;
            let title = element.classList[0];
            element.outerHTML = `<input type='text' class='edit-${title}' value='${inputValue}'></input>`
        }
    }

    update(){
        this.title = this.element.querySelector(".edit-title").value;
        this.description = this.element.querySelector(".edit-description").value;
        gameCall.updateGame(this)
    }

    handleClick = (e) => {
        if (e.target.innerText === "Edit"){
            console.log(e.target)
            e.target.innerText = "Save"
            this.createEditForm()
        }else if(e.target.innerText === "Delete"){
            console.log(e.target)
            gameCall.deleteGame(e)
        }else if(e.target.innerText === "Save"){
            console.log("save works")
            e.target.innerText = 'Edit'
            this.update()
        }
    }

    toDom(){
        Game.cont.appendChild(this.render())
    }
}