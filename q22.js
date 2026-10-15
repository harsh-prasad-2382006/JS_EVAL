const inncresePrice = (products)=>{
    return products.map((prod)=>{
        return prod += prod * .20
    })
}
console.log(inncresePrice([200,400,300]))