const express = require('express');
const {body ,validationResult} = require("express-validator");
const route = express.Router();

//Controller Import
const userController = require('../controller/userController');



//Get All User
route.get('/user',userController.getAllUser);

//GET Single User
route.get('/user/:id',userController.getsingleUser);


//Create Single User 
route.post('/user',[
    //Input Validation Using express-validator Package 
    //Basic Validation:
    body('name').isString().isLength({min:3,max:30  }),
    body('mobile').isLength({min:10,max:10}),
    body('email').isEmail(),
    body('flatNumber').isString().isLength({min:1,max:5}),
    body('buildingName').isLength({max:30}).isString(),
    body('addressLineOne').isString().isLength({max:30}),
    body('city').isString().isLength({min:2,max:15}),
    body('state').isString().isLength({min:2,max:15})

],userController.postSingleUser);


//Update Single User 
route.put('/user/:id',userController.updateSingleUser);


//Delete Single User 
route.delete('/user/:id',userController.deleteSingleUser);

module.exports = route;