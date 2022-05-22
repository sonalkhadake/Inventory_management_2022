const mongoose= require("mongoose");


const CustomerSchema= new mongoose.Schema({
    customer_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    phone:{
        type:Number
    },

    country:{
      type:String
    },
    state:{
        type:String
      },
      city:{
        type:String
      },
      
      pin:{
        type:Number
      },
      
    createdAt:{
        type:Date,
        default:Date.now
    },

    updatedAt:{
        type:Date,
        default:Date.now
    }
})
const Customer= mongoose.model("customer", CustomerSchema);
module.exports=Customer;