//1.install mongoose using npm i mongoose
//2.import mongoose
var mongoose = require("mongoose");

//connect to db
mongoose
    //.connect("connection string")
    //.then()=>{})
    //.catch()=>{})

        mongoose
    .connect("mongodb+srv://test:test@cluster0.oxhcrhw.mongodb.net/MERNIntern?appName=Cluster0")
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>{
        console.log(err);
    })
