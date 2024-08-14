//basic function
var myFunc = function (name, uid) {
    console.log(name + "'s uid is " + uid);
};
myFunc("Kamal", 1234); //calling to the function with uid number
myFunc('Numal', 'w13i1i3'); //calling to the function with uid string
var persons = function (person) {
    console.log(person.name + " " + person.age);
};
persons({ name: 'Mosh', age: 20 }); //calling to the function with person object
