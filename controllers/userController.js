import { getUserByIdService, getAllUsersService, updateUserByIdService, createUserService,deleteUserByIdService, deleteAllUsersDataService,insertAllUsersDataService,loginUserService,changeUserPasswordService} from "../services/productService.js";
import fs from "fs";

export const getUserByIdController = async (req, res) => {
    try {
        const product = await getUserByIdService(req.params.id); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const updateUserByIdController = async (req, res) => {
    try {
        const product = await updateUserByIdService(req.params.id, req.body); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const  deleteUserByIdController= async (req, res) => {
    try {
        const product = await deleteUserByIdService(req.params.id); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const getAllUsersController = async (req, res) => {
    try {
        const product = await getAllUserService(); // קריאה לסרוויס
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const createUserController = async (req, res) => {
    try {
        const product = await createUserService(req.body); 
        if (!product) return res.status(404).send("not found");
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


export const insertAllUsersDataController = async (req, res) => {
    try {
        const rawData = fs.readFileSync("./products.json", "utf-8");
        const initialUsers = JSON.parse(rawData);
        const insertedProducts = await insertAllUsersDataService(initialUsers);
        res.status(201).json({
        message: "Database Reset Successful",
        count: insertedProducts.length
        });


    } catch (err) {
        res.status(500).send("Error during inserting: " + err.message);
    }
};
 export const deleteAllUsersDataController = async (req, res) => {
    try{
        return await deleteAllUsersDataService();
    }catch(err) {
        res.status(500).send("Error during deleting: " + err.message);
    }
 };

  export const loginUserController = async (req, res) => {
    try{
        return await loginUserService();
    }catch(err) {
        res.status(500).send("Error during login: " + err.message);
    }
 };

  export const changeUserPasswordController = async (req, res) => {
    try{
        return await changeUserPasswordService(req.body);
    }catch(err) {
        res.status(500).send("Error during password changing : " + err.message);
    }
 };





