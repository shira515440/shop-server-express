import "dotenv/config"
import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js"; 
import productRouter from "./routes/productRoutes.js"; 
import userRouter from "./routes/userRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

app.use("/", productRouter);
app.use("/users", userRouter);


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
