const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']
/*const people = [
    { name: 'Aidar', budget: 4200 },
    { name: 'Rustam', budget: 3500 },
    { name: 'Tima', budget: 1800 }
]*/
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addIteamEnd() {

}

// Method
/*cars.push('Reno')
cars.unshift('Volga')

const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(firstCar)
console.log(lastCar)
console.log(cars)*/

/*console.log(cars.reverse())
conosle.log(cars)*/


//const index = cars.indexOf('BMW')
//cars[index] = 'Porschse'
//console.log(cars)

/*let findedPerson
for (const person of people) {
    if (person.budget === 3500) {
        findedPerson = person
    }
}
console.log(findedPerson)
/*const index = people.findIndex(function (person) {
    return person.budget === 3500
})*/
/*const person = people.find(person =>  person.budget === 3500)
console.log(person)*/

//console.log(cars.includes('Mazda'))

/*const upperCaseCars = cars.map(car => {
    return car.toLocaleUpperCase()
})*/

const pow2 = num => num ** 2
//const sqrt = num => Math.sqrt(num)

//const pow2Fib = fib.map(pow2).map(Math.sqrt)
/*const pow2Fib = fib.map(pow2)
const filtredNumbers = pow2Fib.filter(num => num > 20)
console.log(pow2Fib)
console.log(filtredNumbers)*/
// Task 1 
/*const text = 'Hello, we are learn JS'
const reversText = text.split('').reverse().join('')

console.log(reversText)*/


const people = [
    { name: 'Aidar', budget: 4200 },
    { name: 'Rustam', budget: 3500 },
    { name: 'Tima', budget: 1800 }
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    if (person.budget > 2000) {
        acc += person.budget
    }
    return acc 
}, 0)

console.log(allBudget)