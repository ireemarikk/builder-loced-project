var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userSchema = new schema({

    name:{
        type: String,
        require: true,
        unique: true
    },
    surname:{
        type: String,
        require: true,
        unique: false
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    userName:{
        type: String,
        require: true,
        unique: true
    },
    tcNo:{
        type: number,
        require: true,
        unique: true
    },
    isAdmin:{
        type: Boolean,
        require: true,
        unique: false
    },
    status:{
        type: Boolean,
        require: true,
        unique: false
    },
    phoneNumber:{
        type: Number,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        unique: false
    },
    created:{
        type:Date,
        default:()=>{
            return new Date()
        }
    }
})

module.exports = mongoose.model("user",userSchema);