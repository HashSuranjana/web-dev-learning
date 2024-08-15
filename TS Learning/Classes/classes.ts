//defining class Patient
class Patient {
    patientName :string ; //name attribute
    patientAge : number ; //age attribute
    patientDisease : string ;  //disease attribute
    isPaymentDone : boolean ; //payment attribute


    //defining constructor
    constructor (patientName :string, patientAge : number, patientDisease : string,isPaymentDone : boolean) {
        this.patientName = patientName ;
        this.patientAge = patientAge ;
        this.patientDisease = patientDisease ;
        this.isPaymentDone = isPaymentDone ;
    }

    //method to console logging the details
    printInvoice() {
        //check the payment info
        if(this.isPaymentDone) {
            console.log (`Name : ${this.patientName} \nAge : ${this.patientAge} \nDisease : ${this.patientDisease} \nPayment: Done `)
        }else{
            console.log (`Name : ${this.patientName} \nAge : ${this.patientAge} \nDisease : ${this.patientDisease} \nPayment: Pending `)
        }
    }

}

const patient1 = new Patient('John',50,'Cold',true) ; //creating patient1 object
const patient2 = new Patient('Tom', 30 ,'Fever', false) ; //creating patient2 object

console.log(patient1,patient2)

let patients : Patient[] = [] ; //creating patients objects array

patients.push(patient1) ;  //adding patient1 objects to the array
patients.push(patient2) ;  //adding patient2 objects to the array

//iterate thorugh the array
patients.forEach (patient =>{
    console.log(patient.printInvoice()) //print invoices of the patients
})

