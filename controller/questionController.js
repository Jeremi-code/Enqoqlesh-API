import QuestionModel from "../model/question";

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
    }
const registerQuestion = async (req, res) => {
    try {
        const { text, category , answer } = req.body;
        const question = new QuestionModel({
        text,
        description,
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        });
        const createdQuestion = await question.save();
        res.status(201).json(createdQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }
