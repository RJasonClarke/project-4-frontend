class Game {
    static all = [];
    static cont = document.getElementById("game-container")
    constructor({id, title, description, img}){
        this.id = id
        this.title = title
        this.description = description
        this.img = img
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `game-${id}`
        Game.all.push(this)
    } 

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <img src=${this.img} alt=${this.title}>
        <h3 class='title'>${this.title}</h3>
        </div>
        `
        return this.element
    }

    toDom(){
        Game.cont.appendChild(this.render())
    }
}