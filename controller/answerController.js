import AnswerModel from '../model/answer.js';
const getAnswer = (req, res) => {
    try {
        const id = req.params.id;
        const answer = AnswerModel.findById(id);
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