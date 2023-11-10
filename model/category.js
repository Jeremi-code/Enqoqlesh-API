import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    Unique : true,
    required: true
  },
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    Default: Date.now,
  },
  updatedAt: {
    type: Date,
    Default: Date.now,
  },
});

const CategoryModel = mongoose.model("Category", CategorySchema);


export default CategoryModel;
