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