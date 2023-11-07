import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
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

const categoryModel = mongoose.model("Category", CategorySchema);

export default categoryModel;
