'use strict';

var typeValidation = function () {
    var variables = [], types = [] ;

    return {
        addElement: function (variable, type) {
            variables.push(variable);
            types.push(type);
        },

        validate: function () {
            var i;
            for (i = 0; i < variables.length; i++) {
                if (typeof variables[i] !== types[i]) {
                    throw new TypeError("Wrong type");
                }
            }
        }
    }
};

var calculatorModule = (function () {
    var pub = {};

    pub.add = function (a, b) {
        var validator =  typeValidation();
        validator.addElement(a, 'number');
        validator.addElement(b, 'number');
        validator.validate();
        return a + b;
    };

    pub.sub = function (a, b) {
        var validator =  typeValidation();
        validator.addElement(a, 'number');
        validator.addElement(b, 'number');
        validator.validate();
        return a - b;
    };

    pub.devide = function (a, b) {
        var validator =  typeValidation();
        validator.addElement(a, 'number');
        validator.addElement(b, 'number');
        validator.validate();
        if (b === 0) {
            throw new RangeError("Devide by 0 is not allowed.");
        }
        return a / b;
    };

    pub.multiplay = function (a, b) {
        var validator =  typeValidation();
        validator.addElement(a, 'number');
        validator.addElement(b, 'number');
        validator.validate();
        return a * b;
    };

    pub.factorial = function (a) {
        var validator =  typeValidation() , i, factorialResult;
        validator.addElement(a, 'number');
        validator.validate();

        if (a < 0) {
            throw new RangeError("The number is out of range");
        }
        factorialResult = 1;

        for (i = 1; i <= a; i++) {
            factorialResult *= i;
        }
        return factorialResult;
    };

    pub.factorialRecursive = function factorialRecursive(a) {
        var validator =  typeValidation();
        validator.addElement(a, 'number');
        validator.validate();

        if (a < 0) {
            throw new RangeError("The number is out of range");
        }

        if (a === 0 || a === 1) {
            return 1;
        }

        return a * factorialRecursive(a - 1);
    };

    return pub;
})();

calculatorModule.add(5, 2);
console.log(calculatorModule.sub(5, 2));
console.log(calculatorModule.devide(5, 2));
console.log(calculatorModule.multiplay(5, 2));
try {
    console.log(calculatorModule.factorialRecursive("5"));
} catch (e) {
    console.log(":()")
}
console.log(calculatorModule.factorial(5));