const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type : String,
        required :true
    },
    mobile:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
   flatNumber: {
       type: String,
       required : true
   },
   buildingName :{
       type :String ,
       required : true
   },
   addressLineOne : {
       type : String,
       required : true
   },
   city:{
       type : String,
       required : true
   },
   state : {
       type : String,
       required : true
   }
})


module.exports = mongoose.model('User',userSchema);