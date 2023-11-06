import CategoryModel from '../model/category.js';

const getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
const getCategoryById = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id);
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
            description
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
        const category = await CategoryModel.findById(req.params.id);
        if (category) {
            category.name = name;
            category.description = description;
        }
        const updatedCategory = await category.save();
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const deleteCategory = async (req,res) => {
    try {
        const category = await CategoryModel.findById(req.params.id);
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

export default { getCategories, getCategoryById, registerCategory, updateCategory, deleteCategory };