//functions without parameters

function checkPremium() {

    let name = 'Hash';
    let age = 18;
    let subscribed = true;

    if(age>=18 && subscribed ===true) {
        document.getElementById('para').innerHTML = name + ' is a premium member !';
    }else if(age<18 || subscribed ===false){
        document.getElementById('para').innerHTML = name + ' is over 18 yrs !'
    } else {
        document.getElementById('para').innerHTML = name + ' is a freebie !';
    }
}


//functions with parameters.


let word = '' ; //declaring the word variable

//function to check the numbers greater than 10
function checkNumber(arrList) {

    //iterating through the list
    for (let element of arrList) {

        if(element> 10) {
            word += element + " " ;
        }
    }

    document.getElementById('para2').innerHTML = word ;
}

let numList = [5,10,11,20,1,8,25,9,14] ; //array of numList

checkNumber(numList) ; //calling the function


//functions with multiple parameters

function person(name,age,country) {
    document.write(name + ' is ' + age+ ' yrs old ' + country + ' guy !');
}

person('John',22,'Sri Lanka');

