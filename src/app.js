const express = require('express');

const app = express();
app.use("/hello",(req,res)=>{
    res.send("Hello from the server...");
})
// app.use("/",(req,res)=>{
//     res.send("namaste from the dashboard...");
// })
app.use("/test",(req,res)=>{
    res.send("test from the server...");
})
app.get("/user",(req,res)=>{
    res.send({firstName:"Naveen",lastName:"K"});
})
app.post("/user",(req,res)=>{
    res.send("Data sucessfully saved to the dashboard");
})

app.delete("/user",(req,res)=>{
    res.send("Data deleted successfully")
})
app.listen(3000,()=> {
    console.log("server is listening on port numberr 3000")
});