//* using Object literals
let Person = {
    name: "Prateek",
    email: "prateek@email.com",
    getDetails: function(){
        console.log(`Name:${this.name}\nEmail:${this.email}`)
    }
}

//* usind Object constructor
let Animal = new Object()
Animal.type = "Tiger"
Animal.eat = function(){
    console.log(`${this.type} eats meet`)
}

//* using Object.create()
let employee = Object.create(Person)

//* using Object.assign()
let hybrid = Object.assign(Person, Animal)
/* Here assign can return combined object and Person is also combined with Animal. We can combine n number of object but first argument will be treated as target element where it will inherit all properties of source i.e other than first argument */

//* using constructor function and new keyword
function Fish(name){
    this.name = name
    this.getName = ()=>{
        console.log(this.name)
    }
}
Fish.prototype.swim = function(){
    console.log(this.name,'is in Acquerium')
}
let fish = new Fish('LionFish');

//* using Class(ES6)
class Cloths{
    constructor(type, brand, price){
        this.type = type
        this.brand = brand
        this.price = price
    }
    getDetails(){
        console.log(`${this.type} ${this.brand} ${this.price}`)
    }
}
let cloths = new Cloths('Shirt', 'Levis', '1000Rs.')

//* using factory function
function Food(name, price){
    return{
        foodName: name,
        price,
        getDetails: function(){
            console.log(`${this.foodName} ${this.price}Rs`)
        }
    }
}
let food = new Food('Idly', 20)

//* even array and Date is treated as object
let arr = []
let date = new Date()