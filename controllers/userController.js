import { 
    getUserByIdService, getAllUsersService, updateUserByIdService, registerUserService, 
    deleteUserByIdService, deleteAllUsersDataService, insertAllUsersDataService, 
    loginUserService, changeUserPasswordService 
} from "../services/userService.js";
import fs from "fs";

export const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserByIdService(req.params.id);
        if (!user) return res.status(404).send("not found");
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const updateUserByIdController = async (req, res) => {
    try {
        const user = await updateUserByIdService(req.params.id, req.body);
        if (!user) return res.status(404).send("not found");
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const deleteUserByIdController = async (req, res) => {
    try {
        const user = await deleteUserByIdService(req.params.id);
        if (!user) return res.status(404).send("not found");
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const createUserController = async (req, res) => {
    try {
        const user = await registerUserService(req.body); 
        res.status(201).json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const insertAllUsersDataController = async (req, res) => {
    try {
        const rawData = fs.readFileSync("./users.json", "utf-8"); 
        const initialUsers = JSON.parse(rawData);
        const inserted = await insertAllUsersDataService(initialUsers);
        res.status(201).json({ message: "Success", count: inserted.length });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const deleteAllUsersDataController = async (req, res) => {
    try {
        await deleteAllUsersDataService();
        res.status(200).send("All users deleted");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginUserService(email, password);
        
        res.status(200).json({ 
            message: "Login successful", 
            token: token, 
            user: { firstName: user.firstName, role: user.role } 
        });
    } catch (err) {
        res.status(401).send(err.message);
    }
};
export const changeUserPasswordController = async (req, res) => {
    try {
        const { id } = req.params;
        const { oldPassword, newPassword } = req.body;
        await changeUserPasswordService(id, oldPassword, newPassword);
        res.status(200).json({ message: "Password updated" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
