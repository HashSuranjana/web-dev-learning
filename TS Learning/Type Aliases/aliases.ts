//basic function

type stringOrNum = string | number ; //aliase convention

let myFunc = (name:string , uid: stringOrNum) :void => {
    console.log(name + "'s uid is " + uid) ;
}

myFunc("Kamal",1234);  //calling to the function with uid number
myFunc('Numal', 'w13i1i3')  //calling to the function with uid string

type personType = {name : string, age :number}

let persons = (person : personType):void => {
    console.log(person.name + " "+ person.age )
}

persons({name :'Mosh',age:20}) //calling to the function with person object


