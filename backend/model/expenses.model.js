var mongoose = require("mongoose");

var schema = mongoose.Schema;


var expensesSchema = new schema({
    name:{
        type: String,
        require: true,
    },
    //alınan miktar
    receivedQuantity:{
        type: Number,
        require: true,
    },
    unit:{
        type: String,
        require: true,
    },
    //miktar
    quantity:{
        type: String,
        require: true,
    },
    company:{
        type: String,
        require: true,
    },
    totalAmount:{
        type: Number,
        require: true,
    },
    //ödenen tutar
    paidAmount:{
        type: Number,
        require: true,
    },
    //kalan tutar
    remainingAmount:{
        type: Number,
        require: true,
    },
    //fatura (şimdilik string alındı alınmadı olarak boolean olabilir)
    invoice:{
        type: String,
        require: true,
    },
    //ödeme şekli
    paymentMethod:{
        type: String,
        require: true,
    },
    progressPayment:{
        type: Number,
        require: true,
    },
    description:{
        type: String,
        require: false,
    },
    status:{
        type: Boolean,
        require: false,
    },
    created:{
        type:Date,
        default:()=>{
            return new Date()
        }
    },
})

module.exports = mongoose.model("expenses",expensesSchema);
