
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://ecommerce:avinash1@cluster0.dco6r.mongodb.net/ecommerce?retryWrites=true&w=majority");
    
}
 
 module.exports=connectdb;
 