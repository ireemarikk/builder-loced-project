var mongoose = require("mongoose");

var schema = mongoose.Schema;


var companySchema = new schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    description:{
        type: String,
        require: true,
        unique: true
    },
    //vergiNo
    taxNumber:{
        type: String,
        require: true,
        unique: false
    },
    //toplam miktar
    totalAmount:{
        type: Number,
        require: true,
        unique: false
    },
    //kalan miktar
    remainingAmount:{
        type: Number,
        require: true,
        unique: false
    },
    //ürün
    product:{
        type: String,
        require: true,
        unique: false
    },
    //ürünün cinsi
    typeOfproduct:{
        type: String,
        require: true,
        unique: false
    },
    //borç
    debt:{
        type: Number,
        require: true,
        unique: false
    },
    //ödenen tarih
    paymentDate:{
        type:Date,
        default:()=>{
            return new Date()
        }
    },
    //alınan tarih
    receiptDate:{
        type:Date,
        default:()=>{
            return new Date()
        }
    },
    //son ödeme tarihi
    dueDate:{
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
    },
})

module.exports = mongoose.model("company",companySchema);
