const express= require('express');
const mongoose=require('mongoose')
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const app=express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);

async function main(){
    mongoose.connect("mongodb+srv://syedaffanhameed2000:wvdVyeEEY5QKTwiE@nodecluster.siziuxx.mongodb.net/?retryWrites=true&w=majority&appName=NodeCluster")
    .then(() => {
        console.log("Connected to the Database");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("Did not connect");
    });
}
main()