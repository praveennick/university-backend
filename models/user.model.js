var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        s_name:{
            type:String,
            required:true,
            unique:true
        },
        s_mobile:{
            type:Number,
            required:true,
            unique:true
        },
        s_email:{
            type:String,
            required:true,
            unique:true
        },
        s_password:{
            type:String,
            required:true,
            unique:true
        },
        role: {
            type: String,
            default: "ROLE_USER",
        }
    }
)

module.exports= mongoose.model("user",UserSchema);
