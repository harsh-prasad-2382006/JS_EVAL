function fetchDetail(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve([
        {
            name:"harsh",
            id:101
        },{
            name:"Ankur",
            id:102
        }
      ])
        },3000)
      
    })
    
}
async function display(){
    try {
        console.log("Fetching...")
        const data =  await fetchDetail();
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
display()