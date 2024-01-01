import QuestionModel from "../model/question.js";
import CategoryModel from "../model/category.js";
import AnswerModel from "../model/answer.js";

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
    const _questions = await Promise.all(
      questions.map(async (question) => {
        return await adjustQuestionObject(question);
      })
      );
    res
      .status(200)
      .json({ message: "Questions found successfully ", data: _questions });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const registerQuestion = async (req, res) => {
  try {
    const { text } = req.body;
    const categoryID = await getCategoryObjectId(req);
    const answerID = await getAnswerObjectId(req, res);
    if (categoryID && answerID) {
      const question = new QuestionModel({
        text,
        category: categoryID,
        answer: answerID,
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

const getAnswerObjectId = async (req, res) => {
  try {
    const answer = await AnswerModel.findOne({ text: req.body.answer });
    if (answer) {
      return answer._id;
    }
    res.status(404).json({ message: "Answer not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoryObjectId = async (req) => {
  try {
    const category = await CategoryModel.findOne({ name: req.params.category });
    if (category) {
      return category._id;
    }
    return null
  } catch (error) {
    console.log(error.message)
  }
};
const getAnswer = async (answerID) => {
  try {
    const answer = await AnswerModel.findById(answerID);
    return answer.text;
  } catch (error) {
    console.log(error.message);
  }
};

const adjustQuestionObject = async (question) => {
  let answer = await getAnswer(question.answer);
  let questionObject = {
    _id: question._id,
    text: question.text,
    category: question.category,
    answer: answer,
  };
  return questionObject;
};

const updateQuestion = async (req, re) => {
  try {
    const id = req.params.id;
    const { text } = req.body;
    const question = await QuestionModel.findById(id);
    if (question) {
      question.text = text || question.text;
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
  registerQuestion,
  updateQuestion,
  deleteQuestion,
};
