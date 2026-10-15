function checkOut(order,log){
    console.log("Processing....")
    try{
        if(!order || !log){
            throw new Error("Order status or Transactions logs are not completed...")
        }
    }catch(err){
        console.log(err.message)
    }finally{
        console.log("Process completed...")
    }
}
checkOut(true,false)
checkOut(true,true)