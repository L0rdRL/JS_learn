// 1 Фнукций
// Function Declaration 
/*function greet(name) {
    console.log('Hello - ', name)
}*/
//Finction Expression
/*const greet2 = function greet2(name) {
    console.log('Hello2 - ', name)
}*/
//greet('Lena')
//greet2('Lena2')

//console.log(typeof greet)
//console.dir(greet)

// 2 Анонимные функций 
/*let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval) // clearTimeout 
    } else {
        console.log(++counter)
    } 
}, 1000)*/

// 3 Стрелончые функций 

function greet(name) {
    console.log('Hello - ', name)
}

const arrow = (name, age ) => {
    //console.log('Hello - ', name, age )
}

//const arrow2 = name => console.log('Hello - ', name)

arrow('Aidar')

//const pow2 = num => num ** 2

//console.log(pow2(5))

// 4 Параметры по умолчянию 
const sum = (a = 40 , b = a * 2) => a + b

console.log(sum(41, 4))
console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7)
console.log(res)

// 5 Замыкание 

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Aidar')
console.log(logWithLastName)