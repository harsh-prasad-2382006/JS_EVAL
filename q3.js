"use strict";
class Product {
    productId;
    productName;
    price;
    category;
    constructor(productId, productName, price, category) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.category = category;
    }
    display() {
        console.log(this.productId);
        console.log(this.productName);
        console.log(this.price);
        console.log(this.category);
    }
}
const a = new Product(1, "Laptop", 45990, "Electronics");
a.display();
