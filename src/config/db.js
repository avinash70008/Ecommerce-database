
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://avinash:avinash1@cluster0.9vruf.mongodb.net/?retryWrites=true&w=majority");
    
}
 
 module.exports=connectdb;
 