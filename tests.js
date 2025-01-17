// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// writing a second unit test
describe('valueIsTrue',
    function () {
        it(`should be a defined function`, function(){
            expect(typeof valueIsTrue).toBe('function')
        });
        it('should return a boolean', function () {
            expect(typeof valueIsTrue()).toBe('boolean')
        });
        it('should return true', function () {
            let value = true;
           expect(valueIsTrue(value)).toBe(true)
            
        })
    })

// is array
describe('isArray', ()=> {
    it(`should be a defined function`, ()=> {
        expect(typeof isArray).toBe('function')
    });
    it('should return a boolean', ()=> {
        expect(typeof isArray()).toBe('boolean')
    });
    it('should should return true when passed an empty arr', () => {
        let arr = []
        expect(isArray(arr)).toBe(true)
    });
    it('should should be false when passed object', () => {
        let obj = {}
        expect(isArray(obj)).toBe(false)
    })
})


//isZero
describe('isZero', () => {
    it(`should be a defined function`, () => {
        expect(typeof isZero).toBe('function')
    });
    it('should should be a number', function () {
        expect(typeof isZero()).toBe('boolean')
    });
    it('should return true if passed 0', function () {
        let number = 0;
        expect(isZero(number)).toBe(true)
    });
    it('should return false', function () {
        expect(isZero(-1)).toBe(false)
        expect(isZero(1)).toBe(false)
    })
})

//@ sayHello
describe(`sayHello`, ()=> {
    it(`should be defined as a function`, ()=> {
        expect(typeof sayHello).toBe('function')
    });
    it(`should return a string`, ()=> {
        expect(typeof sayHello()).toBe('string')
    });
    it(`should return hello amber`, ()=> {
        let name = 'Amber'
        expect(sayHello(name)).toBe('Hello, Amber!')
    });
    it(`should never be undefined`, ()=> {
        expect(sayHello()).not.toBe(undefined)
    });
    it(`should say Hello World when passed true`, ()=> {
        expect(sayHello(true)).toBe(`Hello, World!`)
    })
})

//@ isFive
describe(`isFive`, ()=> {
    it(`should be defined as a function`, () => {
        expect(typeof isFive).toBe('function')
    });
    it(`should should return a boolean`, ()=> {
        expect(typeof isFive()).toBe('boolean')
    });
    it(`should return true when passed 5`, ()=> {
        let five = 5
        expect(isFive(five)).toBe(true)
    });
    it(`should be able to read 5 as a string`, () => {
        let five = '5'
        expect(isFive(five)).toBe(true)
    })
})

//@ isEven
describe(`isEven`, ()=> {
    it(`should be a defined function`, ()=> {
        expect(typeof isEven).toBe('function')
    });
    it(`should return a boolean value`, ()=> {
        expect(typeof isEven()).toBe('boolean')
    });
    it(`should return true when passed 2`, () => {
        let num = 2
        expect(isEven(num)).toBe(true)
    });
    it(`should return true when passed a negative even`, ()=> {
        let num = -4
        expect(isEven(num)).toBe(true)
    });
    it(`should return false when passed 3`, ()=> {
        let num = 3
        expect(isEven(num)).toBe(false)
    });
    it(`should return false when passed a string`, ()=> {
        let str = "banana"
        expect(isEven(str)).toBe(false)
    });
    it(`should return true when passed a truthy even number`, ()=> {
        let num = '8'
        expect(isEven(num)).toBe(true)
    });
    it(`should return false with Infiniti`, ()=> {
        let num = Infinity;
        expect(isEven(num)).toBe(false)
    });
    it('should return false when passed a boolean', () =>  {
        let bools = {
            t : true,
            f: false
        }
        expect(isEven(bools.f)).toBe(false)
        expect(isEven(bools.t)).toBe(false)
    });
    it(`should return return false if undefined`, ()=> {
        expect(isEven()).toBe(false)
    })
    
})

describe(`isVowel`, ()=> {
    it(`should be defined as a function`, ()=> {
        expect(typeof isVowel).toBe('function')
    });
    it(`should always return a boolean`, ()=> {
        expect(typeof isVowel()).toBe('boolean')
    });
    it(`should return true when passed capital or lowercase 'A'`, ()=> {
        let lower = 'a'
        let upper = 'A'
        expect(isVowel(upper)).toBe(true)
        expect(isVowel(lower)).toBe(true)
    
    });
    it(`shoudld return false when passed 'y'`, ()=> {
        let letter = 'y'
        expect(isVowel(letter)).toBe(false)
    });
    it(`should return false when passed a number`, ()=> {
        let num = 4;
        expect(isVowel(num)).toBe(false)
    });
    it(`should return false when passed a boolean`, ()=> {
        let bools = {
            t: true,
            f: false
        }
        expect(isVowel(bools.t)).toBe(false)
        expect(isVowel(bools.f)).toBe(false)
    });
    it(`shoudld return false when passed a string instead of char`, ()=> {
        let string = 'bannana'
        expect(isVowel(string)).toBe(false)
    });
    it(`should return false if variable is undefined`, ()=> {
        expect(isVowel()).toBe(false)
    })
})

describe(`add`, ()=> {
    it(`should be a function`, ()=> {
        expect(typeof add).toBe('function')
    });
    it(`should return a number`, ()=> {
        expect(typeof add()).toBe('number')
    });
    it(`should add two numbers`, ()=> {
        expect(add(2,3)).toBe(5)
        expect(add(-3, -9)).toBe(-12)
    
    });
    it(`should parse numbers`, ()=> {
        expect(add('5', 6)).toBe(11)
        expect(add('-4', '10')).toBe(6)
    });
    it(`should return NaN if not able to parse`, ()=> {
        expect(add('banana', 'split')).toBeNaN()
        expect(add(2, 'apples')).toBeNaN()
    });
    it(`should return NaN if undefined`, ()=> {
        expect(add()).toBeNaN()
    })

})



