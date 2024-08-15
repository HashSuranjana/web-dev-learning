var Product = /** @class */ (function () {
    function Product(productName, productPrice, productCatogary, productDes) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productCatogary = productCatogary;
        this.productDes = productDes;
    }
    Product.prototype.invoiceProduct = function () {
        console.log("Product : ".concat(this.productName, " \nCategory : ").concat(this.productCatogary, " \nDescription : ").concat(this.productDes, " \nPrice : ").concat(this.productPrice));
    };
    return Product;
}());
var laptop = new Product('Laptop', 1100, 'Electronics', '16gb Ram,1TB HDD');
var shirt = new Product('Shirt', 120, 'Clothing', 'Polo');
var products = [];
products.push(laptop);
products.push(shirt);
products.forEach(function (product) {
    console.log(product.invoiceProduct());
});
