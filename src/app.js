const express = require('express');

const app = express();
app.use("/",(req,res)=>{
    res.send("namaste from the dashboard...");
})
app.use("/test",(req,res)=>{
    res.send("test from the server...");
})
app.use("/hello",(req,res)=>{
    res.send("Hello from the server...");
})

app.listen(3000,()=> {
    console.log("server is listening on port numberr 3000")
});