function order(amt){
    try{
        if(amt>23){
            throw new Error("Order amount exceededs the maximum permitted limit")
        }
    }catch(error){
        console.log(error.message)
    }
}
order(24)
order(22)