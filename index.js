const express= require('express');
const app=express();

app.post("/user/signup",function(req,res){
    res.json({
        message:"user signup"
    })
})
app.post("/user/signin",function(req,res){
    res.json({
        message:"user signin"
    })
})
app.post("/course/purchase",function(req,res){
    res.json({
        message:"purchase the course"
    })
})
app.get("/user/purchases",function(req,res){
    res.json({
        message:"user purchases"
    })
})
app.get("/courses",function(req,res){
    res.json({
        message:"all courses"
    })
})