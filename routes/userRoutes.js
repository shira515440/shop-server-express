import express from "express";
import { 
    getAllUsersController, getUserByIdController, createUserController, 
    updateUserByIdController, deleteUserByIdController, deleteAllUsersDataController, 
    insertAllUsersDataController, loginUserController, changeUserPasswordController
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.post("/register", createUserController);
router.put("/:id", updateUserByIdController);
router.delete("/:id", deleteUserByIdController);

router.get("/admin/insert-data", insertAllUsersDataController);
router.get("/admin/delete-data", deleteAllUsersDataController);

router.post("/login", loginUserController); 
router.patch("/:id/password", changeUserPasswordController);

export default router;