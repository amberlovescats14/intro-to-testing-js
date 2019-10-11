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
        let name = 'amber'
        expect(sayHello(name)).toBe('hello amber')
    });
    it(`should never be undefined`, ()=> {
        expect(sayHello()).not.toBe(undefined)
    })
})