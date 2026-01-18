import { resetDataService, getProductByIdService, updateProductByIdService, deleteProductByIdService,getAllProductService, createProductService} from "../services/productService.js";
import fs from "fs";

export const findProductByIdController = async (req, res) => {
    try {
        const product = await getProductByIdService(req.params.id); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const updateProductByIdController = async (req, res) => {
    try {
        const product = await updateProductByIdService(req.params.id, req.body); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const deleteProductByIdController = async (req, res) => {
    try {
        const product = await deleteProductByIdService(req.params.id); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const getAllProductController = async (req, res) => {
    try {
        const product = await getAllProductService(); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const createProductController = async (req, res) => {
    try {
        const product = await createProductService(req.body); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


export const resetProductController = async (req, res) => {
    try {
        const rawData = fs.readFileSync("./products.json", "utf-8");
        const initialProducts = JSON.parse(rawData);
        const insertedProducts = await resetDataService(initialProducts);
        res.status(201).json({
        message: "Database Reset Successful",
        count: insertedProducts.length
        });


    } catch (err) {
        res.status(500).send("Error during reset: " + err.message);
    }
};




