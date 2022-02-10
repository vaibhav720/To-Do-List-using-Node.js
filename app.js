const express = require("express");

const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
let items = ["Eating","Sleeping"];
let Workitems = ["Javascript","Leetcode"];
app.post('/',function(req,res){
    if(req.body.list==="Time Table")
    {
        Workitems.push(req.body.item);
        res.redirect("/work");
    }
    else{
        items.push(req.body.item);
        res.redirect("/"); 
    }
});

app.post("/work",function(req,res){
    Workitems.push(req.body.item);
    res.redirect();
});

app.get("/work",function(req,res){
    res.render('list', {kindOfDay: "Time Table", lista: Workitems});
});

app.get("/",function(req,res){
    let day = date.getDate();
    res.render('list', {kindOfDay: day, lista: items});
});




app.listen(3000, function(){
    console.log("Server started on port 3000");
});