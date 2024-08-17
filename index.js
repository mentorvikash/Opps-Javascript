const circle = {
    radius: 12,
    location: {
        x: 0,
        y: 0
    },
    drawCircle: function () {
        console.log("draw")
    }
}

circle.drawCircle()

// factor function 
function circleFactory(radius) {
    return {
        radius,
        drawCircle: function () {
            console.log("draw from factory")
        }
    }
}

const circle1 = circleFactory(1)
circle1.drawCircle()

// Constructor function - by convention start with capital letter

function Rectangle(length, breath) {
    this.length = length,
        this.breath = breath,
        this.area = function () {
            console.log("area of rect", this.length * this.breath)
        }
}

const rect1 = new Rectangle(12, 6);
rect1.area()


// Value type -  copy by value - premitive type
// Number, string, boolean, symbol, undefined, null

let a = 10

function increment(a) {
    a++
}
increment(a)
console.log("value of a is", a)


// Reference Types -  copy by reference -  non-permitive type
// Object Function Array

let b = {
    value: 10
}

function incrementRef(b) {
    b.value++
}
incrementRef(b)
console.log("value of b is", b.value)


// how to access object

function Fruit(name, taste) {
    this.name = name
    this.taste = taste
    this.describe = function () {
        console.log(`Taste of ${this.name} is ${this.taste} `)
    }
}

const apple = new Fruit("Apple", "Sweet")
const mango = new Fruit("Mango", "Sweet")
apple.color = "red"
mango.color = "yellow"
mango.describe()
console.log(apple)


for (let key in apple) {
    if (typeof apple[key] != 'function')
        console.log({ key })
    // console.log("value", apple[key])
}

const keys = Object.keys(mango)
console.log({ keys })


const randomKey = "color"

if (randomKey in mango) console.log(randomKey + ` key is present`);

mango.hasOwnProperty("constructor") ? console.log("constructor" + ` key is present`) : console.log("no it is not")


