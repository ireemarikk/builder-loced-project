var mongoose = require("mongoose");

var schema = mongoose.Schema;

var projectSchema = new schema({

    name:{
        type: String,
        require: true,
        unique: true
    },
    //birim
    unit:{
        type: String,
        require: true,
        unique: false
    },
    description:{
        type: String,
        require: true,
        unique: false
    },
    // dükkan sayısı
    numberOfshops:{
        type: Number,
        require: true,
        unique: false
    },
    //daire sayısı
    numberOfapartments:{
        type: Number,
        require: true,
        unique: false
    },
    //daire numarası
    apartmentNumber:{
        type: Number,
        require: true,
        unique: false
    },
    //daire adı
    apartmentName:{
        type: String,
        require: true,
        unique: false
    },
    //arsa sahibi
    propertyOwner:{
        type: String,
        require: true,
        unique: false
    },
    //hakediş
    progressPayment:{
        type: Number,
        require: true,
        unique: false
    },
    //ücret
    charge:{
        type: Number,
        require: true,
        unique: false
    },
    //ada
    island:{
        type: String,
        require: true,
        unique: false
    },
    parcel:{
        type: String,
        require: true,
        unique: false
    },
    //mahalle
    neighborhood:{
        type: String,
        require: true,
        unique: false
    },
    //il
    province:{
        type: String,
        require: true,
        unique: false
    },
    //ilçe
    district:{
        type: String,
        require: true,
        unique: false
    },
    //sokak
    street:{
        type: String,
        require: true,
        unique: false
    },
    status:{
        type: Boolean,
        require: true,
        unique: false
    },
    endDate:{
        type:Date,
        default:()=>{
            return new Date()
        }
    },
    created:{
        type:Date,
        default:()=>{
            return new Date()
        }
    }
})

module.exports = mongoose.model("project",projectSchema);