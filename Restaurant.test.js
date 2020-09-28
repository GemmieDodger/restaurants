
const Menu = require("./Menu.js")
const Restaurant = require("./Restaurant.js")

//Restaurant checks

describe('Restaurant', () => {
    test("check for restaurant", () => {
        const restaurant = new Restaurant({name:"The Ram", image:"http:/image.jpg"})
        expect(restaurant.name).toBe("The Ram")
        expect(restaurant.image).toBeTruthy
    })
    test("check for error", () => {
        expect(() => {new Restaurant({})}).toThrow()
    })
    test('can add a menu', () => {
        const menu = new Menu({title: "Dessert Menu"})
        expect(menu.title).toBe("Dessert Menu")
        // expect(Array.isArray(menu.items)).toBeTruthy
    })
})


 