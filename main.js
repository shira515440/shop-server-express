import "dotenv/config"
import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js"; // הנתיב לחיבור ה-DB
import productRouter from "./routes/productRoutes.js"; 
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 3001;
// הגדרות בסיסיות
app.use(cors());
app.use(express.json());

// חיבור הראוטר הראשי
app.use("/", productRouter);
app.use("/users", userRouter);
// פונקציית הפעלה
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
