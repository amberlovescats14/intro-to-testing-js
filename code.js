//*_____ NO TEST >
//@ if input is a number ...truthy
const isNumeric = value => value == parseFloat(value)
//     !isNan(parseFloat(value))

//@ is less than 0
const isNegative = num => parseFloat(num) < 0

//@ greater than 0
const isPositive = input => parseFloat(input) > 0

//@ input is non-numeric //@ I wrote that funny
const isNotNumeric = input => !isNumeric(input)

//*_______ < END NO TEST

//!!! TESTED FUNCTIONS FROM HERE DOWN !!////

// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

const valueIsTrue = val => val === true;

//@ is an array or not
const isArray = input => Array.isArray(input);

//@ has to be number and has to be zero
const isZero = num => (
    !isNegative(num) && !isPositive(num) && isNumeric(num)
)

//@ say hello name
const sayHello = name => `hello ${amber}`

