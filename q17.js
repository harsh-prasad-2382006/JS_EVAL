function fetch(){
    throw new Error("Server error:failed to fetch data")
}
function data(){
    fetch()
}
function showData(){
    try{
        data()
    }catch(err){
        console.log(err.message)
    }
}
showData()