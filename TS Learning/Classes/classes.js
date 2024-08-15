//defining class Patient
var Patient = /** @class */ (function () {
    //defining constructor
    function Patient(patientName, patientAge, patientDisease, isPaymentDone) {
        this.patientName = patientName;
        this.patientAge = patientAge;
        this.patientDisease = patientDisease;
        this.isPaymentDone = isPaymentDone;
    }
    //method to console logging the details
    Patient.prototype.printInvoice = function () {
        //check the payment info
        if (this.isPaymentDone) {
            console.log("Name : ".concat(this.patientName, " \nAge : ").concat(this.patientAge, " \nDisease : ").concat(this.patientDisease, " \nPayment: Done "));
        }
        else {
            console.log("Name : ".concat(this.patientName, " \nAge : ").concat(this.patientAge, " \nDisease : ").concat(this.patientDisease, " \nPayment: Pending "));
        }
    };
    return Patient;
}());
var patient1 = new Patient('John', 50, 'Cold', true); //creating patient1 object
var patient2 = new Patient('Tom', 30, 'Fever', false); //creating patient2 object
console.log(patient1, patient2);
var patients = []; //creating patients objects array
patients.push(patient1); //adding patient1 objects to the array
patients.push(patient2); //adding patient2 objects to the array
//iterate thorugh the array
patients.forEach(function (patient) {
    console.log(patient.printInvoice()); //print invoices of the patients
});
