import QuestionModel from "../model/question.js";
import CategoryModel from "../model/category.js";
import AnswerModel from "../model/answer.js";

const getQuestion = (req, res) => {
  try {
    const id = req.params.id;
    const question = QuestionModel.findById(id);
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getQuestions = async (req, res) => {
  try {
    const questions = await QuestionModel.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const registerQuestion = async (req, res) => {
  try {
    const { text } = req.body;
    const categoryID = await getCategoryObjectId(req, res);
    const answerID = await getAnswerObjectId(req, res);
    if (categoryID && answerID) {
      const question = new QuestionModel({
        text,
        category: categoryID,
        answer: answerID,
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
      });
      const createdQuestion = await question.save();
      res.status(201).json(createdQuestion);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnswerObjectId = async (req, res) => {
  try {
    const answer = await AnswerModel.find({ text: req.body.answer });
    if (answer) {
      return answer._id;
    }
    res.status(404).json({ message: "Answer or Category not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoryObjectId = async (req, res) => {
  try {
    const category = await CategoryModel.find({ name: req.body.category });
    if (category) {
      return category._id;
    }
    res.status(404).json({ message: "Answer or Category not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const { text } = req.body;
    const question = await QuestionModel.findById(id);
    if (question) {
      question.text = text || question.text;
      question.updatedAt = new Date().toISOString();
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
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getQuestion, getQuestions, registerQuestion, updateQuestion, deleteQuestion };