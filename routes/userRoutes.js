import express from "express";
import { 
    getAllUsersController, 
    getUserByIdController,
    createUserController,
    updateUserByIdController,
    deleteUserByIdController,
    deleteAllUsersDataController,
    insertAllUsersDataController,
    loginUserController,
    changeUserPasswordController
} from "../controllers/userController.js";

const router = express.Router();

// מיפוי הכתובות לפונקציות בקונטרולר
router.get("/User", getAllUsersController);
router.get("/User/:id", getUserByIdController);
router.post("/User", createUserController);
router.put("/User/:id", updateUserByIdController);
router.delete("/User/:id", deleteUserByIdController);
router.get("/insert-users-data", insertAllUsersDataController);
router.get("/delete-users-data", deleteAllUsersDataController);
router.put("/User/:id", loginUserController);
router.put("/User/:id", changeUserPasswordController);



export default router;