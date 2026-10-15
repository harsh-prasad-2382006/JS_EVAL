function productAvailability(product){
    return new Promise((resolve, reject) => {
      if(product<10){
        resolve("Product is available")
      }else{
        reject("Product is not available")
      }
    })
    
}
productAvailability(11)
.then((prod)=>{
    console.log(prod)
})
.catch((err)=>{
    console.log(err)
})