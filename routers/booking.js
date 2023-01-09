const book_table =require('../models/book_table')
const bodyparser=require('body-parser')
const express = require('express');
const router=express.Router()
const path=require('path');
const urlenco=bodyparser.urlencoded({ extended: false })
router.use(bodyparser.json())
router.get('/book',(req,res)=>{

    res.sendFile(path.dirname(__dirname)+'/views/booking.html')
})
router.post('/booking',urlenco,(req,res)=>{
    const details=req.body
    console.log(details)
    const table =book_table.create({ student_name: details.name, student_phone_no:details.phone_no,book_date:details.date,subject:details.subject})
    res.send("done")
})
module.exports=router
// student_name:Sequelize.STRING,
//     student_phone_no:{type:Sequelize.INTEGER},
//     date:{type:Sequelize.STRING,primaryKey:true},
//     subject:{type:Sequelize.STRING}