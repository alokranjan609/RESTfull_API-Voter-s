const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
   name:{
     type:String,
     required:true,
   },
   age:{
     type:Number,
     required:[true,"price must be provided"],
   }
});

module.exports=mongoose.model('Product',productSchema)
