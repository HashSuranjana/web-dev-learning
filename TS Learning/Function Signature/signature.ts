let marks :(x:number, y:number) => void ; //signaturing the function

//declaring function
marks =(markOne :number ,markTwo:number) => {
    console.log(markOne + markTwo) ;
}

marks(10,20) ; //calling the function


let calc : (n:number,m:number,word:string) =>number  //signaturing the function

calc = (number1 :number, number2 :number,word :string) =>{
    if(word.toLowerCase() === 'add') {
        return number1 + number2;
    }else if(word.toLowerCase() === 'multiply') {
        return number1 * number2;
    }else{
        return 0;
    }
}

console.log(calc(10,40,'ADD')) ;  //calling the funtion with ADD as the word
console.log(calc(40,2,'Multiply') ) ;  //calling the funtion with Multiply as the word

//using type alias in this signature functions

let persons : (obj :{name :string, age:number, gender:string}) => void ; //signaturing the function with object parameter

//type aliasing object
type person  = {
    name :string,
    age :number,
    gender :string
}

//declaring the function
persons = ( x : person) => {
    console.log (`${x.name} is a ${x.age} yrs old ${x.gender}`);
}

//object variable
let johnInfo = {
    name :'John',
    age :10,
    gender :'Male'
}
persons(johnInfo) ; //calling the function