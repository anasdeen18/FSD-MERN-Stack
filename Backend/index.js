//1.npm init
//2.npm i express -Installed Express
//3.Importing Express
var express = require("express");
var port =3000;
require("./db");

//import the model file
var user = require("./model");

//Initializing Express
var app = express();

//middleware
app.use(express.json());

//API
//to add data to db
app.post("/", async (req,res)=>{
    try {
        await user(req.body).save();
        res.send("Data Added Successfully!");
    } catch (error) {
        console.log(error);
    }
});


//app.method('/url',(req,res)=>{})
    app.get("/", (req,res)=>{
        res.send("Welcome to node!!")
    });

//Server in listening mode
app.listen(port,()=>{
    console.log(`Server is running in ${port}`)
})