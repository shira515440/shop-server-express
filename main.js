import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const port = 3000;
const app = express();



app.use(express.json());


const Product = mongoose.model("Product", productSchema);
app.use(cors())
app.use(express.json());




const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
};



startServer();





/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});*/
