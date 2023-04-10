const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'))
const port = 6200;



const {AssignmentRoute} = require('./Routes/AssignmentRoute/Mytable')
app.use('/', AssignmentRoute);




app.listen(port,() =>{

    console.log('Server listening on port ${6200}');
})