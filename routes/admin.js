
const {Router}=require("express");
const {adminModel}=require("../db");

const adminRouter=Router();

adminRouter.post("/",function(req,res){
    res.json({
        message:"admin purchases"
    })
})
adminRouter.put("/",function(req,res){
    res.json({
        message:"admin purchases"
    })
})
adminRouter.get("/bulk",function(req,res){
    res.json({
        message:"admin purchases"
    })
})
adminRouter.post("/signin",function(req,res){
    res.json({
        message:"admin signin"
    })
})
adminRouter.post("/signup",function(req,res){
    res.json({
        message:"admin signup"
    })
})


module.exports={
    adminRouter:adminRouter
}