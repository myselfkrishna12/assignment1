const connection = require("../../Model/DbConnect");
const asyncHandler = require("express-async-handler");

////////////GET ASSIGNMENT///////////

const getMytable = async(req,res)=>{

    let mytable = req.body;
     let sqlQuery ="SELECT  * FROM MYTABLE";
     await connection.query(sqlQuery,mytable,function(error,result) {
        if(error){
            console.log("error", error.sqlMessage);
        }
        else{
            res.json(result);
        }
    }
)
}



///////////POST ASSIGNMENT///////////


const postMytable = asyncHandler( async(req,res)=>{
    
    const { filename } = req.file
    let mytable ={
        image:req.file.path,
        title:req.body.title,
        description:req.body.description,
        qty:req.body.qty,
        price:req.body.price,
        date:req.body.date,
    };
    console.log(req.body,"request")
    console.log(mytable,"mytable")
     let sqlQuery = "INSERT INTO mytable SET ?";


     await connection.query(sqlQuery, mytable,function(error,result) {
        if(error){
            console.log("error", error.sqlMessage);
        }

        else{
            res.json(result);
        }
    }
)
})


module.exports = {getMytable , postMytable}




