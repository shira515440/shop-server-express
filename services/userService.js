import User from "../models/User.js";
import bcrypt from "bcryptjs"; 

const hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

export const registerUserService = async (userData) => {
    const lastUser = await User.findOne().sort({ id: -1 });
    const nextId = lastUser ? lastUser.id + 1 : 1;
    const hashedPassword = hashPassword(userData.password);
    return await User.create({ ...userData, password: hashedPassword, id: nextId });
};

export const loginUserService = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error("no user found");
    const isMatching = bcrypt.compareSync(password, user.password);
    if (!isMatching) throw new Error("wrong password");
    return user; 
};

export const changeUserPasswordService = async (id, oldPassword, newPassword) => {
    const user = await User.findOne({ id: Number(id) });
    if (!user) throw new Error("no user found");
    const isMatching = bcrypt.compareSync(oldPassword, user.password);
    if (!isMatching) throw new Error("password do not match");
    const newHash = hashPassword(newPassword);
    return await User.findOneAndUpdate({ id: Number(id) }, { password: newHash }, { new: true });
};

export const getUserByIdService = async (id) => {
    return await User.findOne({ id: Number(id) });
};

export const getAllUsersService = async () => {
    return await User.find({});
};

export const updateUserByIdService = async (id, updateData) => {
    return await User.findOneAndUpdate({ id: Number(id) }, updateData, { new: true });
};

export const deleteUserByIdService = async (id) => {
    return await User.findOneAndDelete({ id: Number(id) });
};

export const deleteAllUsersDataService = async () => {
    return await User.deleteMany({});
};

export const insertAllUsersDataService = async (initialData) => {
    return await User.insertMany(initialData);
};