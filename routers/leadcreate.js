const lead_table =require('../models/lead_table')
const express = require('express')
const bodyparser=require('body-parser')
const app = express()
const router=express.Router()
const path= require('path')
router.get('/lead',(req,res)=>{
    //res.send("hello")
    res.sendFile(path.dirname(__dirname)+'/views/lead.html')
})
const urlenco=bodyparser.urlencoded({ extended: false })
app.use(bodyparser.json())
router.post('/leadcreate',urlenco,(req,res)=>{
    const details=req.body
    const table =lead_table.create({  student_phone_no:details.phone_no})
    console.log(details)
    res.send("done")
})
module.exports=router
// student_name:{type:Datatype.STRING},
// student_phone_no:{type:Datatype.INTEGER}