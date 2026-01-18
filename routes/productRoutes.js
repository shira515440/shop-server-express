import express from "express";
import { 
    getAllProductController, 
    findProductByIdController,
    createProductController,
    updateProductByIdController,
    deleteProductByIdController,
    resetProductController
} from "../controllers/productController.js";

const router = express.Router();

// מיפוי הכתובות לפונקציות בקונטרולר
router.get("/products", getAllProductController);
router.get("/products/:id", findProductByIdController);
router.post("/products", createProductController);
router.put("/products/:id", updateProductByIdController);
router.delete("/products/:id", deleteProductByIdController);
router.get("/insert-data", resetProductController);

export default router;