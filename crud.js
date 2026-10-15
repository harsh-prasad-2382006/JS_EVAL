
import { createConnection } from 'mysql2'
const db = createConnection({
    host:"localhost",
    user:"root",
    password:"harshu2382006",
    database:"ecommerce"
})

function connect(){
    db.connect((err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Database connected")
        }
    })
}

connect()

function insert(productName,category,price,stockQuantity){
    try{
        const product = {productName,category,price,stockQuantity}
        db.query("insert into product set ?",product,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("data inserted...")
            }
        })
    }catch(error){
        console.log(error)
    }
}




function update(productName,category,price,stockQuantity,productId){
    try{
        db.query("update product set productName =?,category=?,price=?, stockQuantity=? where productId=?",[productName,category,price,stockQuantity,productId],(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Data updated")
            }
        })
    }catch(error){
        console.log(error)
    }
}


function deleteData(productId){
    try{
        db.query("delete from product where productId=?",productId, (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Data deleted")
            }
        })
    }catch(error){
        console.log(error)
    }
}

function display(){
    try {
        db.query("select * from product",(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
    } catch (error) {
        
    }
}

insert("Laptop","Electronic",34000,45)
insert("Mobile","Electronic",34000,45)
insert("Watch","Electronic",34000,45)
display()
update("Mobile","Electronic",23000,78,2)
update("Watch","Electronic",3000,8,3)
display()
deleteData(3)
display()