import Product from "../models/User.js";

export const getUserByIdService = async (id) => {
    return await User.findOne({ id: id }); 
};

export const getAllUsersService = async () => {
    return await User.find(); 
};

export const updateUserByIdService = async (id , updateData) => {
    return await User.findOneAndUpdate( { id: id } , updateData, { new: true }); 
};

export const createUserService = async (Data) => {
    
    const newProduct = new User({ ...Data });
    return await newProduct.save();
};

export const deleteUserByIdService = async (id) => {
    return await User.findOneAndDelete({ id: id });
}

export const deleteAllUsersDataService = async () => {
    return await User.deleteMany({});

}

export const insertAllUsersDataService = async (initialData) => {
    return await User.insertMany (initialData);

}

export const loginUserService = async (id) => {

};

export const changeUserPasswordService = async (id) => {

};
