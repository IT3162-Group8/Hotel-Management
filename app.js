const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/getUsers",cors(),(req,res)=>{
    collection.find()
    .then(employeedata => res.json(employeedata))
    .catch(err =>res.json(err))
})


app.post("/",async(req,res)=>{
    const{email,password,empId,firstName,lastName}=req.body

    try{
        const check=await collection.findOne({empId:empId})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password,empId,firstName,lastName,address,dob,selectedBank,accNum,selectPosition,nicNumber,gender}=req.body

    const data={
        email:email,
        password:password,
        empId:empId,
        firstName:firstName,
        lastName:lastName,
        address:address,
        dob:dob,
        selectedBank:selectedBank,
        accNum:accNum,
        selectPosition:selectPosition,
        nicNumber:nicNumber,
        gender:gender,
        
    }

    try{
        const check=await collection.findOne({empId:empId})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})

