// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

const valueIsTrue = val => val === true;

//@ is an array or not
const isArray = input => Array.isArray(input);

//@ has to be number and has to be zero
const isZero = num => parseFloat(num) === 0


//@ say hello name
const sayHello = (name = 'World') => {
    if(name === true || false)
        if(typeof name !== 'string') return `Hello, World!`
    return `Hello, ${name}!`
}

//@ isFive
const isFive = number => number == 5;

//@ is even
const isEven = (num = false) => parseFloat(num) % 2 == 0;

//@ isVowel
const isVowel = char => {
    let letter = typeof char === 'string' ? char.toLowerCase() : ''
    switch(letter){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': return true;
        default: return false;
    }
}
