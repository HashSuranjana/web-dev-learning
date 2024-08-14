let myFunction :Function  //initializing a function 

//function declaring
myFunction = () => {
    console.log('hello Welcome !');
}

myFunction(); //calling to the function


//functions with parameters


let addNum = (firstNum :number, secondNum : number) : number => {
    return firstNum + secondNum ;
}

console.log( addNum(2,5) ) //console logging the function call

//functions which are not returning 

let printStat = (name : string) : void => {
    console.log('Hello ' + name)
}

printStat("John")

//functions with optional and union parameters

let person = (name :string, age:number, personId : string|number, address? :string ) :void => {
    
    //checking the optional parameter has a value
    if(address !== undefined) {
        console.log (name + " " + age + " " + personId + " " + address) ;
    }else {
        console.log (name + " " + age + " " + personId ) ;
    }
}


person("Hash",20,'w123324','no.12/1,lsdl') ; //calling the person with an address
person('John',30,456232,);  //calling the person without an adress