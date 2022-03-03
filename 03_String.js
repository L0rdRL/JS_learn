//String
/*const name = 'Aidar'
const age = 22

function getAge() {
    return age */
//const output = 'Hello, my name is ' + name  + ' and my age: ' + age + ' y.o '
/*const output = `Hello my name is ${name} and my age ${getAge()} y.o `

console.log(output )*/

/*const output = `
    <div> This is div </div>
    <p> this is 
//console.log(output)*/

/*const name = 'Aidar'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('da'))
console.log(name.startsWith('Ai'))
console.log(name.endsWith('r'))
console.log(name.repeat(3))
const string = '      pasword      '
console.log(string.trim())
console.log(string.trimLeft())
console.log(string.trimRight())*/

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Not born yet'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Aidar'
const personName2 = 'Timur'
const personAge = 22
const personAge2 = -10
const output = logPerson` Name: ${personName}, Age: ${personAge}! `
const output2 = logPerson` Name: ${personName2}, Age: ${personAge2}! `
console.log(output)
console.log(output2)