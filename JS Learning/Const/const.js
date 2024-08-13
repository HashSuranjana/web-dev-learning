//function to calculate the delivery Fee

function shippingCost(distance) {

    const deliveryFeePercentage = 50/100; //delivery Percentage

    let deliveryFee = distance * deliveryFeePercentage ;  //calculation of the delivey fee

    document.write('Your shipping cost is ' + deliveryFee + ' Rs/=')  ; //display in the browser
    
    document.write('<br/></br/>')  //adding two new lines
    
}

let distance = 30 //decalre the distance variable

shippingCost(distance); //calling the function

let distance2 = 156  //decalre the distance2 variable

shippingCost(distance2);  //calling the function