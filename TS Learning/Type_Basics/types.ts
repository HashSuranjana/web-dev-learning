//explicit Types

let name :string = "Hash" ;  //Declaring a string variable

console.log(name)

let age :number; // initializing age variable

age = 10  //declaring age

console.log(age)

let isLoggedIn : boolean = false //decalring boolean variable
console.log(isLoggedIn)


//arrays of Strings

let fruits :string[] = ['Apple','Banana','Mango','Orange'];

fruits.push('Grapes'); //adding another fruit

//iterate through the fruits and console logging it
fruits.forEach(fruit =>{
    console.log(fruit);
})

//arrays of numbers

let marks :number[] = [];

marks.push(10);
marks.push(20);
marks.push(30);

//filtering marks and logging it into the console
marks.filter(mark => {
    mark >10 ? console.log(mark) : ""
})

//union arrays 

let mixedArray: (string|number)[] = [1,5,'hello',10,'world'] ;

mixedArray[2] = 2
mixedArray[0] = 'Josh'

console.log(mixedArray[2])
console.log(mixedArray[1])

//Objects 

let person : {
    personName : string,
    personAge :number,
    personCountry? :string //this is optional 
}

person = {
    personName :'Hash',
    personAge : 20
}

console.log(person.personName + " " + person.personAge)






