
const {Router}=require("express")

const userRouter=Router();

userRouter.get("/purchases",function(req,res){
    res.json({
        message:"user purchases"
    })
})
userRouter.post("/signin",function(req,res){
    res.json({
        message:"user signin"
    })
})
userRouter.post("/signup",function(req,res){
    res.json({
        message:"user signup"
    })
})

module.exports={
    userRouter:userRouter
}