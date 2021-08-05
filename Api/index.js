const express = require ("express");
const app= express();
const cors= require ("cors");
app.use(cors());

app.get("/", (req, res) =>{
    res.json(
       {data: ["Umar", "Aamer", "Javed", "Arsalan"]}
    );
});

app.get("/emp", (req, res)=>{
    res.send("I am from employee");
});

app.get("/dept",(req, res)=>{
    res.send("I am from Hr department");
});

if(app.listen(5000)){
    console.log("connected")
}