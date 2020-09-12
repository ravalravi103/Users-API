const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//Custom Import
const userRoute = require('./Route/userRoute');
const { urlencoded } = require('express');


//Global Variable 
const PORT = 4000;
const DatabseString = 'mongodb://localhost:27017/assignment';


//Parser Incoming Request:
app.use(bodyParser.json());

//Usre Route 
app.use(userRoute)




mongoose.connect(DatabseString, { useNewUrlParser: true ,useUnifiedTopology: true })
 .then(()=>{
    console.log('Connected to Database !')
    app.listen(PORT,()=> console.log(`Server Started at ${PORT}`))  
 })
 .catch(err => console.log(err))
