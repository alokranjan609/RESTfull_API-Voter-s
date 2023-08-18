const mongoose=require("mongoose");
uri="mongodb+srv://new-api-79:Alok11688@cluster0.p8nd6lj.mongodb.net/?retryWrites=true&w=majority";
const connectDB=()=>
{
  // console.log("i am in");

  return mongoose.connect(uri,
  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
};
module.exports=connectDB;
