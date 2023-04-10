const express = require('express');
const AssignmentRoute = express.Router();
const multer = require('multer');
const path = require('path');
const {getMytable , postMytable} = require('../../Controller/Assignment/mytable')

const storage = multer.diskStorage({
    destination: './uploads',
    filename:function(req,file,cb){

        cb(null,`${file.fieldname}${Date.now()}${path.extname(file.originalname)}`)

    }
})

const upload = multer({storage: storage})


AssignmentRoute.get('/getmytable', getMytable) 
 
AssignmentRoute.post('/postmytable',upload.single('imageupload'), postMytable)
 

module.exports = {AssignmentRoute};