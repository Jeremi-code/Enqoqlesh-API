import AdminModel from "../model/admin.js";
import crypto from "crypto";

const addAdmin = async (req, res) => {
  try {
    const { name } = req.body;
    const newAdmin = new AdminModel({
      name,
      apiKey: generateApiKey(),
      createdAt: new Date().toISOString(),
    });
    const addedAdmin = await newAdmin.save();
    res
      .status(200)
      .json({ message: "Admin added successfully", data: addedAdmin });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const generateApiKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const removeAdmin = async (req, res) => {
  try {
    const API_KEY = req.params.apiKey;
    const admin = await AdminModel.findOne({ apiKey: API_KEY });
    if (admin) {
      AdminModel.deleteOne({ apiKey: API_KEY });
      res.status(200).json({ message: "admin removed successfully" });
    } else {
      res.status(404).json({ message: "admin not found" });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export { addAdmin, removeAdmin };
