const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello  new wolrd");
});
app.post('/signup', (req,res)=>{
   const {name, email, password}= req.body;
   console.log(name, email, password);
});

app.listen(4000 ,()=>{
    console.log("server is running");
});