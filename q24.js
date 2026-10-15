// 
const discountPrice = (products)=>{
    return products.map((prod)=>{
        return prod -= prod * .20
    })
}
console.log(discountPrice([200,400,300]))

//
function filterExpensiveProducts(products){
    return products.filter((prod)=>{
        return prod.price>20000
    })
}
console.log(filterExpensiveProducts([{
    product:"Tv",price:30000
},{
    product:"Watch",price:3000
}]))


//

const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
];

const total = cart.reduce(
    (sum, item) => sum += item.price * item.quantity,
    0
);

console.log("Total:", total);
