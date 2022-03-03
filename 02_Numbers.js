// (1) Number

/*const num = 29 // integer 
const float = 29.07 // float
const pow = 10e3
console.log('MAX_SAFE_INTIGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53) - 1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log(Number.NaN) // Not a Number 
console.log(typeof NaN)
const wierd = 2 / undefined
console.log(Number.isNaN(wierd))
console.log(Number.isNaN(29))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(29))

const stringInt = '42'
const stringFloat = '29.07'
console.log(parseInt(stringInt) + 2)

console.log(parseFloat(stringFloat) + 2 )*/

/*console.log(0.4 + 0.2) // 0.6
console.log((0.4 + 0.2).toFixed(1))
console.log(parseFloat((0.4 + 0.2).toFixed(1)))*/

// (2) BigInt
/*console.log(9007199254740991999999n - 900719925474099199n)
console.log(-9007199254740991999999n)*/
//console.log(9007199254740991999999.1231233n) //error

//console.log(10n - 4) //error
//console.log(parseInt(10n) - 4)
/*console.log(10n - BigInt(4))
console.log(5n / 2n) */ //2.5n но выйдет 2 так как тут используется тип Int

// (3) Math

/*console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42))
console.log(Math.max(42, 12, 30, 23, 425))
console.log(Math.min(42, 12, 30, 23, 425))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.9))
console.log(Math.trunc(4.9))*/

// (4) Example

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(10, 42))
