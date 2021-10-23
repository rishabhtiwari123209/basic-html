const express = require('express');
const path = require('path');
// const http=require('http'); 
const app = express();
const PORT = 3000 || process.env.PORT;
const hbs=require("hbs");

//template directory and partial directary
const temp=path.join(__dirname, "template/views");
const partials=path.join(__dirname, "template/partials");
app.set("view engine","hbs");

app.set("views",temp);
hbs.registerPartials(partials);

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});

app.listen(PORT,()=>{
    console.log(`listening to the ${PORT}`);
});


// npm run rishu
