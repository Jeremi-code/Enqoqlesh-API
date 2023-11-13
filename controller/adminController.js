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
