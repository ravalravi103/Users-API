const { validationResult } = require("express-validator");
const User = require('../model/User');
const { use } = require("../Route/userRoute");

//Get All User Controlller
exports.getAllUser = (req,res,next) => {
   // find All User 
      User.find()
        .then(users=> {
            console.log(users);
            res.status(201).json({
                users: users
            });
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({
                messgae : "Cannot Find User Somthing Went Wrong!",
                error : err
            })
        })
}


//Get Single User Controller
exports.getsingleUser = (req,res,next) => {
    // Fetch User By Id
      const id = req.params.id; 
      User.findById(id)
        .then((user)=> {
            console.log(user)
           if(user!==null){
                console.log(user);
                return res.status(201).json({
                    messgae : "User Fatched SuccessFully !",
                    user : user
                })
           }

                console.log('User Not Found ! Please Enter User First !');
                return res.status(404).json({
                    messgae : "User Not Found Please Enter User First !"
                })
        })
        .catch(err=> {
            console.log('SomeThing Went Wrong!')
            console.log(err)
            return res.status(500).json({
                messgae : 'Somethong went Wrong',
                error : err
            })
        })
}


//Post SingleUser Controller
exports.postSingleUser = (req,res,next) => {
    /*
     User Validation Using express-validaor Package 
       1.User Name Cannot be Empty
       2.User Name MinimumLenght:3 and and Maximum Length:10
       3.MobileNumber Always In String and should be 10 dight and cannot be empty
       4.email address Should be Proper Email Address and cannot be empty
       5.Address Always Strong and Cannot be Empty;
    */
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error : errors.array()
        });
    }

    //Collect User Input
    const {name, mobile, email, flatNumber,buildingName,addressLineOne,city,state} = req.body;

     // Create User Object 
    const newuser = new User({
        name : name ,
        mobile : mobile,
        email : email,
        flatNumber : flatNumber,
        buildingName :buildingName,
        addressLineOne :addressLineOne,
        city : city,
        state : state
    })

   // Checks User Alredy Exist Or Not If Exist Then 
   // Don't Have The User 
    User.find({email : email})
      .then((user)=> {
         if(user.length>0){
            console.log('User With This Email Alredy Exist! Please Pick Differet One');
            return res.status(403).json({
                messgae : "User With That Email Alredy Exist Please Pick Diffent One!",
                user : user
            })
         }
          //save The User to Database
          newuser.save()
          .then((user)=>{
              console.log(user);
              console.log('User Saved SuccessFully!');
              return res.status(201).json({
               messgae : "Sent SuccessFully!",
               user : user
           })
          })
          .catch(err=> {
              console.log(err)
              return res.status(500).json({
                  messgae : 'Something Went Wrong !',
                  error : err
              })
          })
      })
      .catch(err=> {
          if(err){
              console.log('Sorry !Something Went Wrong ! Please Try Again');
              return res.status(500).json({
                messgae : 'Something Went Wrong !',
                error : err
            })
          }
      })  
}


//Update Single User Controller
exports.updateSingleUser = (req,res,next) => {
    /*
         we can Update The User with Two Methods
         1.put and Patch (Here we use put)

     */
     const {name, mobile, email,flatNumber,buildingName,addressLineOne,city,state} = req.body;
     const id = req.params.id;

     User.findById(id, (err,user)=>{
        if(err){
            console.log('User not Found');
            return res.status(404).json({
                messgae : "SomeThing Went Wrong!",
                error : err
            })
        }

        // Update All The Feild Here
        user.name = name ;
        user.mobile = mobile;
        user.email = email;
        user.flatNumber = flatNumber,
        user.buildingName = buildingName,
        user.addressLineOne = addressLineOne,
        user.city  = city,
        user.state = state

            user.save()
            .then(user=>{
                console.log('User Updated !');
                return res.status(201).json({
                    messgae : "User Update SuccessFully",
                    user : user
                }) 
            })
            .catch(err => {
                 console.log('Something Want Wrong!');
                 return res.status(500).json({
                     messgae : "Something Went Wrong! Please Try Again",
                     error : err
                 })
            })
     })
}



//Delete Single User Controller
exports.deleteSingleUser = (req,res,next) => {
    const id = req.params.id;
    
    User.findByIdAndDelete(id)
      .then(user => {
          console.log('User Deleted SuccessFully !');
           return res.status(200).json({
              messgae : 'User Deleted SuccessFully !'
          })
      })
      .catch(err => {
          console.log('SomeThing Went Wrong!');
          return res.status(500).json({
              messgae : "Something Went Wrong With Server Please Try again !",
              error : err
          })
      })

}