class Restaurant {

    constructor({name, image = "http://image.jpg"}) {
    // if (!name) throw new Error("Please enter name of restaurant")
    this.name = name
    this.menus = []
    this.image = image        
    }

    addMenu(menu){
        this.menus.push(menu)
    }

}

module.exports = Restaurant
