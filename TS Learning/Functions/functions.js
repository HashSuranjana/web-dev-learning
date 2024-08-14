var myFunction; //initializing a function 
//function declaring
myFunction = function () {
    console.log('hello Welcome !');
};
myFunction(); //calling to the function
//functions with parameters
var addNum = function (firstNum, secondNum) {
    return firstNum + secondNum;
};
console.log(addNum(2, 5)); //console logging the function call
//functions which are not returning 
var printStat = function (name) {
    console.log('Hello ' + name);
};
printStat("John");
//functions with optional and union parameters
var person = function (name, age, personId, address) {
    //checking the optional parameter has a value
    if (address !== undefined) {
        console.log(name + " " + age + " " + personId + " " + address);
    }
    else {
        console.log(name + " " + age + " " + personId);
    }
};
person("Hash", 20, 'w123324', 'no.12/1,lsdl'); //calling the person with an address
person('John', 30, 456232); //calling the person without an adress
