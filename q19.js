class InvalidProductException extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidProductException"
    }
}
function product(id){
    try{
        if(id!==1){
            throw new InvalidProductException("Product is not valid")
        }
        console.log("Id is valid")
    }catch(err){
        console.log(err.name+": "+err.message)
    }
}
product(2)
product(1)