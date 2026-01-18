import Product from "../models/Product.js";

export const getProductByIdService = async (id) => {
    return await Product.findById(id); 
};

export const getAllProductService = async () => {
    return await Product.find(); 
};

export const updateProductByIdService = async (id , updateData) => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true }); 
};

export const createProductService = async (Data) => {
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const newId = lastProduct ? lastProduct.id + 1 : 1;
    const Product = new Product ({...Data, id:newId});
    return await Product.save();
};

export const deleteProductService = async (id) => {
    return await Product.findByIdAndDelete(id);
}

export const resetDataService = async (initialData) => {
    Product.deleteMany({});
    return await Product.insertMany (initialData);

}