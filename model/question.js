import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.schema.Types.ObjectId,
        ref : category,
        required: true
    },
    answer: {
        type: mongoose.schema.Types.ObjectId,
        ref : answer,
        required: true
    }
});

const Question = mongoose.model('Question', questionSchema);

export default Question
