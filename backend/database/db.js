const mongoose = require("mongoose");

const uri = "mongodb+srv://ireemarikk:1@builderproject.j9zwdzb.mongodb.net/?retryWrites=true&w=majority";

const connection =  () =>{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb bağlantısı başarılı!"))
    .catch((err)=> console.log ("Bağlantı Hatası! Hata: " + err.message));
}
module.exports = connection;