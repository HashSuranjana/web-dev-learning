class Product {

    constructor (
        readonly productName: string,
        private productPrice : number,
        private productCatogary : string,
        public productDes :string
    ) {

    }

    invoiceProduct() {
        console.log(`Product : ${this.productName} \nCategory : ${this.productCatogary} \nDescription : ${this.productDes} \nPrice : ${this.productPrice}`);
        
    }
}


const laptop = new Product('Laptop' , 1100 , 'Electronics' , '16gb Ram,1TB HDD') ;
const shirt = new Product ('Shirt', 120, 'Clothing','Polo');

let products :Product[] = [] ;

products.push(laptop);
products.push(shirt);

products.forEach(product => {
    console.log(product.invoiceProduct())
})