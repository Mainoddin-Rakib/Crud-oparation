const mongoose =require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String 
});

const user =mongoose.model("User", userSchema)

module.exports = user;