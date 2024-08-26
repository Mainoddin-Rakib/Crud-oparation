var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mainoddinrakib130:XfHScScT2dnQbFgJ@cluster0.3b8m1.mongodb.net/crud_db",{

});
mongoose.connection.on("connected", ()=>{
  console.log("coonected to MongoDB");
});
 
mongoose.connection.on("error",(err) =>{
  console.error(`MongoDB connection error: ${err}`);
})

module.exports = mongoose;