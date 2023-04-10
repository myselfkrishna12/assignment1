var mysql = require('mysql');
var connection = mysql.createConnection({

    user:'root',
    host:"localhost",
    password:"",
    port: 3306,
    database:'assignment',
})

connection.connect(function(err) {
    if (err){
      console.log("Error Occured......",err.sqlMessage);
    } 
    else{
      console.log("Connection Established");
    } 
  })
  
  module.exports = connection;
  