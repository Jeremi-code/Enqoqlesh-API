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
        const categoryID = await getCategoryObjectId(req, res);
        const answerID = await getAnswerObjectId(req, res);
        if ( categoryID && answerID ) {
            const question = new QuestionModel({
            text,
            category : categoryID,
            answer : answerID,
            createdAt: new Date().toISOString(),
            updateAt: new Date().toISOString(),
            });
            const createdQuestion = await question.save();
            res.status(201).json(createdQuestion);
    }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    }

const getAnswerObjectId = async (req, res) => {
    try {
        const answer = await AnswerModel.find({text : req.body.answer});
        if ( answer ) {
            return answer._id;
        }
        res.status(404).json({ message: "Answer or Category not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCategoryObjectId = async (req, res) => {
    try {
        const category = await CategoryModel.find({name : req.body.category});
        if ( category ) {
            return category._id;
        }
        res.status(404).json({ message: "Answer or Category not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

