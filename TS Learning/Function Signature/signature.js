var marks; //signaturing the function
//declaring function
marks = function (markOne, markTwo) {
    console.log(markOne + markTwo);
};
marks(10, 20); //calling the function
var calc; //signaturing the function
calc = function (number1, number2, word) {
    if (word.toLowerCase() === 'add') {
        return number1 + number2;
    }
    else if (word.toLowerCase() === 'multiply') {
        return number1 * number2;
    }
    else {
        return 0;
    }
};
console.log(calc(10, 40, 'ADD')); //calling the funtion with ADD as the word
console.log(calc(40, 2, 'Multiply')); //calling the funtion with Multiply as the word
//using type alias in this signature functions
var persons; //signaturing the function with object parameter
//declaring the function
persons = function (x) {
    console.log("".concat(x.name, " is a ").concat(x.age, " yrs old ").concat(x.gender));
};
//object variable
var johnInfo = {
    name: 'John',
    age: 10,
    gender: 'Male'
};
persons(johnInfo); //calling the function
