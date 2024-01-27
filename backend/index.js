const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/db");

app.use(express.json());
app.use(cors());

connection();
const port = process.env.PORT || 5001;
app.listen(port,()=> console.log("Uygulama http://localhost:5001/ portunda ayağa kalktı!"));