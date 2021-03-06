'use strict';

describe('calculator module test', function () {

    it('should add two numbers', function () {
        // given
        var a = 1, b = 4, result;
        // when
        result = calculatorModule.add(a, b);
        // then 
        expect(result).toBe(5);
    });

    it('should substract two numbers', function () {
        // given
        var a = 5, b = 4, result;
        // when
        result = calculatorModule.sub(a, b);
        // then 
        expect(result).toBe(1);
    });

    it('should devide two numbers', function () {
        // given
        var a = 5, b = 2, result;
        // when
        result = calculatorModule.devide(a, b);
        // then 
        expect(result).toBe(2.5);
    });

    it('should multiplay two numbers', function () {
        // given
        var a = 5, b = 4, result;
        // when
        result = calculatorModule.multiplay(a, b);
        // then 
        expect(result).toBe(20);
    });

    it('should factorial number', function () {
        // given
        var a = 5, result;
        // when
        result = calculatorModule.factorial(a);
        // then 
        expect(result).toBe(120);
    });

    it('should throw exception when given wrong type in add function', function () {
        //given
        var a = 'one', b = 1, result;
        //then
        expect(function () { calculatorModule.add(a, b); }).toThrow(new TypeError("Wrong type"));
    });

    it('should return error if given negative number in factorial', function () {
        //given
        var a = -1;
        //then
        expect(function () { calculatorModule.factorial(a); }).toThrow(new RangeError("The number is out of range"));
    });

    it('should return error if given negative number in factorial recursive', function () {
        //given
        var a = -1;
        //then
        expect(function () { calculatorModule.factorialRecursive(a); }).toThrow(new RangeError("The number is out of range"));
    });

        it('should return error if devide by 0', function () {
        //given
        var a = 4, b = 0;
        //then
        expect(function () { calculatorModule.devide(a, b); }).toThrow( new RangeError("Devide by 0 is not allowed."));
    });

            it('should return error in validation', function () {
        //given
        var a = 4, b = 0, aType = 'numeric', bType = 'numeric', validator;
        //when
        validator = typeValidation();
        validator.addElement(a, aType);
        validator.addElement(b, bType);
        //then
        expect(function () { validator.validate();}).toThrow( new TypeError("Wrong type"));
    });

});

