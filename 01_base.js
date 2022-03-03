// 1-ый блок про перменные
// variable
//var name = 'Aidar'

// constant
const firstName = 'Aidar' // String
 //const age = 22 // number 
 //const isProgrammer = true // Boolean

//camelCase - firsName два солва вместе но с втрого слова заглавная 

const _ = 'private'
const $ = 'some value'

//const if = 'mkef' // err
const withNum5 = '5'
// const 5WithNum = 5 // err

// 2-ый блок  Мутирование 
//console.log('Human Name: ' + firstName + ', and human age: ' + age)
//alert('Human Name: ' + firstName + ', and human age: ' + age)

//const lastName = prompt('enter youre last name')
//alert(firstName + ' ' + lastName) 

// 3-Операторы 
//const currentYear = 2021
//const birthYear = 1999

 //const age = currentYear - birthYear

const a = 10
const b = 5

let c = 32
//c = c + a 
//c += a
//c -= a
//c *= a
//c /= a

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(currentYear++)
//console.log(currentYear)
//console.log(c)

// 4-Типы Данных

//const isProgrammer = true
//const name = 'Aidar'
//const age = '22'
//let x
//console.log(typeof isProgrammer)
//console.log(typeof age)
//console.log(typeof x)

// 5-Приоритет опертаторов 

//const fullAge = 21
//const birthYear = 1999
//const currentYear = 2021

//const isFullAge = currentYear - birthYear >= fullAge // 26>= 27 => true 
//console.log(isFullAge)

// 6-Условные операторы 
//const courseStatus = 'pending' // ready, fail, pending

//if (courseStatus === 'ready') {
    //console.log('The course is already ready, you can take it')
//} else if (courseStatus === 'pending') {
   // console.log('The course is still under development')
//} else {
    //console.log('course is not ready ')
//}

const isReady = true

//if (isReady) {
  //  console.log('All is ready!')
//} else {
  //  console.log('All is not ready  ')
//}

// Тернарное выражение 
//isReady ? console.log('All is ready') : console.log('All is not ready')

//const num1 = 42 //number 
//const num2 = '42' // string

//console.log(num1 === num2)

// 7- Булевая логика 
// тут должна быть ссылка на статью про (И-&&) (Или-||) (Не- !здесь пример)

// 8- Функция 

//function calculateAge(year) {
   // return 2021 - year
//}

//console.log(calculateAge(1999))
//console.log(calculateAge(2019))

//function logInfoAbout(name, year) {
   // const age = calculateAge(year)

//}

//logInfoAbout(' Aidar ', 1999)
//logInfoAbout(' Dana ', 2002) 

// 9- Массивы 

//const cars = ['Mazda', 'BMW', 'Nissan']
//const cars = new Array('Mazda', 'BMW', 'Nissan')
//console.log(cars.length)

//console.log(cars[1])
//console.log(cars[0])
//console.log(cars[2])

//cars[0] = ('Porsche')
//cars[3] = ('Mazsa')
//console.log(cars)

//10- Циклы

//const cars = ['Mazda', 'BMW', 'Nissan', 'Porsche']

//for (let i = 0; i < cars.length; i++) {
//    const car = cars[i]
 //   console.log(car) 
//}

//for (let car of cars) {
  //  console.log(car)
//}

// 11-Объекты 
const person = {
    firstName: 'Aidar',
    lastName: 'Tleshev',
    year: 1999,
    languages: ['Ru', '[En]', '[Kz]'],
    hasWife: false,
    greet: function () {
        console.log('greet frome person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()