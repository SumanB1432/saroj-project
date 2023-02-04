const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
const multer=require('multer')
const route = require('./route/route');


app.use(bodyParser.json());

app.use(multer().any())


const port=process.env.port||3000;

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://Suman-1432:Suman1432@cluster0.bkkfmpr.mongodb.net/ecFileCompanyTask")
.then(()=>{
    console.log("mongoDB is connected")
})
.catch((err)=>{
    console.log(err)
})
app.use("/", route)

app.listen(port,()=>{
    console.log(`connected to port:${port}`)
})