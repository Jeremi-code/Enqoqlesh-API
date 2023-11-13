import AdminModel from "../model/admin";
const addAdmin = async (req, res) => {
  try {
    const { name } = req.body;
    const newAdmin = new AdminModel({
      name,
      apiKey: generateApiKey(),
    });
    const addedAdmin = newAdmin.save();
    res
      .status(200)
      .json({ message: "Admin added successfully", data: addedAdmin });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const generateApiKey = () => {};

const removeAdmin = async (req, res) => {
  try {
    const API_KEY = req.params.apiKey
    const admin = await AdminModel.findOne({ apiKey: API_KEY });
    if (admin) {
      AdminModel.deleteOne({ apiKey: API_KEY});
      res.status(200).json({ message: "admin removed successfully" });
    } else {
      res.status(404).json({ message: "admin not found" });
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export { addAdmin,removeAdmin }