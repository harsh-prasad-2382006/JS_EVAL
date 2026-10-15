function getProductInfo<T>(info: T):T{
    return info;
}
console.log(getProductInfo<string>("Laptop"))
console.log(getProductInfo<number>(23000))
console.log(getProductInfo<string>("Electronics"))