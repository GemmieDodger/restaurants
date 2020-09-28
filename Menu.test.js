const Restaurant = require("./Restaurant.js")
const Menu = require("./Menu.js")


describe("Menu", () => {
    test("check menu exists", () => {
        const menu = new Menu({title:"Drinks"})
        expect(menu.title).toBe("Drinks")
    })
})
