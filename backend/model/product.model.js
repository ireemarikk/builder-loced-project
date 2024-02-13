var mongoose = require("mongoose");

var schema = mongoose.Schema;

var company = require("./company.model");

var productSchema = new schema({
    name:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: false,
    },
    unit:{
        type: String,
        require: false,
    },
    typeOfproduct:{
        type: String,
        require: false,
    },
    amount:{
        type: Number,
        require: false,
    },
    unitPrice:{
        type: Number,
        require: false,
    },
    typeOfproduct:{
        type: String,
        require: false,
    },
    status:{
        type: Boolean,
        require: false,
    },
    // objectId primary key olarak düşünülebiliyor
    companyBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    },
    created:{
        type:Date,
        default:()=>{
            return new Date()
        }
    },
})

module.exports = mongoose.model("product",productSchema);
