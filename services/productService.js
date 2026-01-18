import Product from "../models/Product.js";

export const getProductByIdService = async (id) => {
    return await Product.findOne({ id: id }); 
};

export const getAllProductService = async () => {
    return await Product.find(); 
};

export const updateProductByIdService = async (id , updateData) => {
    return await Product.findOneAndUpdate( { id: id } , updateData, { new: true }); 
};

export const createProductService = async (Data) => {
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const newId = lastProduct ? lastProduct.id + 1 : 1;
    const newProduct = new Product({ ...Data, id: newId });
    return await newProduct.save();
};

export const deleteProductByIdService = async (id) => {
    return await Product.findOneAndDelete({ id: id });
}

export const resetDataService = async (initialData) => {
    await Product.deleteMany({});
    return await Product.insertMany (initialData);

}