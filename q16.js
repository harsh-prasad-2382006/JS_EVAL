function product(stock){
    try {
        if(stock>10){
            throw new Error("Stock is insufficeint")
        }
        console.log("Stock is available")
    } catch (error) {
        console.log(error.message)
    }
}
product(99)