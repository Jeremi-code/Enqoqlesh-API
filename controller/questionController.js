import QuestionModel from "../model/question.js";
import CategoryModel from "../model/category.js";

const getQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const question = await QuestionModel.findById(id);
    if (question) {
      res
        .status(200)
        .json({ message: "Question found successfully ", data: question });
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestions = async (req, res) => {
  try {
    const round = parseInt(req.query.round);
    const categoryID = await getCategoryObjectId(req);
    const questions = await QuestionModel.aggregate([
      { $match: { category: categoryID } },
      { $sample: { size: round } },
    ]);
    res
      .status(200)
      .json({ message: "Questions found successfully ", data: questions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const addQuestion = async (req, res) => {
  try {
    const { text, answer } = req.body;
    const categoryID = await getCategoryObjectId(req);
    if (categoryID) {
      const question = new QuestionModel({
        text,
        category: categoryID,
        answer,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      const createdQuestion = await question.save();
      res.status(201).json({
        message: "Question added successfully",
        data: createdQuestion,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getCategoryObjectId = async (req) => {
  try {
    const category = await CategoryModel.findOne({ name: req.params.category });
    if (category) {
      return category._id;
    }
    return null;
  } catch (error) {
    console.log(error.message);
  }
};


const updateQuestion = async (req, re) => {
  try {
    const id = req.params.id;
    const { text, answer } = req.body;
    const question = await QuestionModel.findById(id);
    if (question) {
      question.text = text || question.text;
      question.answer = answer || question.text;
      question.updatedAt = new Date().toISOString();
      const updatedQuestion = await question.save();
      res.json({
        message: "Question updated successfully",
        data: updatedQuestion,
      });
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const question = await QuestionModel.findById(id);
    if (question) {
      question.deleteOne({ _id: id });
      res.status(200).json({ message: " Question deleted successfully" });
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export {
  getQuestion,
  getQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
};
