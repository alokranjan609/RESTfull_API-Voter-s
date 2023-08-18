require("dotenv").config();
const express=require("express");
const app=express();
const PORT=process.env.PORT||3000;
const products_routes=require("./routes/products");
const connectDB=require("./db/connect");
app.get("/",(req,res)=>
{
  res.send("<h1>Hi,From server</h1>");
});

app.use("/api/products",products_routes);

    connectDB();
    app.listen(3000,()=>
  {
    console.log("Hi, server is runnnig");
  });
