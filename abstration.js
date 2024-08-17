// create local variable so that no one can access privity propety from outside

function Person(name, birthYear) {
    let calculateDOB = new Date().getFullYear() - birthYear // Private varible, not be accessed outside
    this.yourage = function () {
        console.log(` Hay ${name} your age is ${calculateDOB}`)
    }
}

const ravi = new Person("Ravi", 1995)
ravi.yourage()

// create a constructor function with name Car
function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
    // create a variable to store geolocation
    let giolocation = {
        x: 0,
        y: 0
    }

    Object.defineProperties(this, {
        "giolocation": {
            get: function () {
                return giolocation
            },
            set: function (value) {
                if (!value.x || !value.y) {
                    throw new Error("Invalid geolocation")
                }
                giolocation = value
            }
        }
    })

    Object.defineProperties(this, {
        "newProp": {
            get: function () {
                return "newProp"
            },
            set: function (value) {
                throw new Error("Cannot set newProp value")
            }

        }
    })

    this.getDetails = function () {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
    }
}

const myCar = new Car("Toyota", "Camry", 2010)
console.log(myCar.giolocation)
// myCar.giolocation = 1 // throw error
console.log(myCar.giolocation)
console.log(myCar.getDetails())

// myCar.newProp = "something" // through error