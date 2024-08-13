//Comparison Operators

let distance = 40 ;  //declating varible distance

//check the shipping cost and logging it into the console
if (distance >20) {
    console.log("Shipping cost is 100 Rs.");
} else{
    console.log("Shipping cost is 50 Rs.");
}


const num = 20 ; //declaring the num variable

//checking whether the number's type and value both are equals
if (num === '20') {
    document.getElementById('para').innerHTML = '"20" is equal to "20" !';
}else{
    document.getElementById('para').innerHTML = '20 is not equal to "20" !';
}

//Logical Operators

//decaring an array of objects
let person = { 
         name :"Hash",
        country : "SriLanka",
        isPremium : false,
        age :20
    }

if(person.age>=18 && person.isPremium === true) {
    document.getElementById('para2').innerHTML = person.name + " can access anything !";
} else if (person.age <18 || person.isPremium === true){
    document.getElementById('para2').innerHTML = person.name + " can access anything !";
}else{
    document.getElementById('para2').innerHTML = person.name + " can access premium things !";
}





