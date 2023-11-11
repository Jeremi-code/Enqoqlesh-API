import CategoryModel from '../model/category.js';

const getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json({ message : "Categories fetched successfully" , data : categories});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({ name : req.params.category });
        res.status(200).json(category); 
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const registerCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = new CategoryModel({
            name,
            description,
            createdAt: new Date().toISOString(),
            updateAt: new Date().toISOString()
        });
        const createdCategory = await category.save();
        res.status(201).json(createdCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = await CategoryModel.findOne({ name : req.params.category});
        if (category) {
            category.name = name || category.name;
            category.description = description || category.description;
            category.updatedAt = new Date().toISOString();
        }
        const updatedCategory = await category.save();
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const deleteCategory = async (req,res) => {
    try {
        const category = await CategoryModel.findOne({ name : req.params.category });
        if(category) {
            category.remove();
            res.status(200).json({ message: 'Category deleted successfully' });
        }
        else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export  { getCategories, getCategory, registerCategory, updateCategory, deleteCategory };