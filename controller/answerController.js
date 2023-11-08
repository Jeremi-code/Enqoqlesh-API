import AnswerModel from '../model/answer.js';

const getAnswer = async (req, res) => {
    try {
        const id = req.params.id;
        const answer = await AnswerModel.findById(id);
        if (answer) {
            res.status(200).json(answer);
        }
        else {
            res.status(404).json({ message: 'Answer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAnswers = async (req, res) => {
    try {
        const answers = await AnswerModel.find();
        res.status(200).json(answers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const registerAnswer = async (req, res) => {
    try {
        const { text, description } = req.body;
        const answer = new AnswerModel({
            text,
            description,
            createdAt: new Date().toISOString(),
            updateAt: new Date().toISOString()
        });
        const createdAnswer = await answer.save();
        res.status(201).json(createdAnswer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateAnswer = async (req, res) => {
    try {
        const id = req.params.id;
        const { text, description } = req.body;
        const answer = await AnswerModel.findById(id);
        if (answer) {
            answer.text = text || answer.text;
            answer.description = description || answer.description;
            answer.updatedAt = new Date().toISOString();
            const updatedAnswer = await answer.save();
            res.status(200).json(updatedAnswer)
        } else {
            res.status(404).json({ message: 'Answer not found' });
        }
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteAnswer = async (req, res) => {
    try {
        const id = req.params.id;
        const answer = await AnswerModel.findById(id);
        if (answer) {
            answer.deleteOne({ _id: id });
        } else {
            res.status(404).json({ message: 'Answer not found' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { getAnswer, getAnswers, registerAnswer, updateAnswer, deleteAnswer}