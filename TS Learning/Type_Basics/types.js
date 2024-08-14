//explicit Types
var name = "Hash"; //Declaring a string variable
console.log(name);
var age; // initializing age variable
age = 10; //declaring age
console.log(age);
var isLoggedIn = false; //decalring boolean variable
console.log(isLoggedIn);
//arrays of Strings
var fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
fruits.push('Grapes'); //adding another fruit
//iterate through the fruits and console logging it
fruits.forEach(function (fruit) {
    console.log(fruit);
});
//arrays of numbers
var marks = [];
marks.push(10);
marks.push(20);
marks.push(30);
//filtering marks and logging it into the console
marks.filter(function (mark) {
    mark > 10 ? console.log(mark) : "";
});
//union arrays 
var mixedArray = [1, 5, 'hello', 10, 'world'];
mixedArray[2] = 2;
mixedArray[0] = 'Josh';
console.log(mixedArray[2]);
console.log(mixedArray[1]);
//Objects 
var person;
person = {
    personName: 'Hash',
    personAge: 20
};
console.log(person.personName + " " + person.personAge);
