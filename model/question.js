import mongoose from 'mongoose'

const QuestionSchema =  mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref : category,
        required: true
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref : answer,
        required: true
    },
    createdAt : {
        type : Date,
        Default : Date.now
    },
    updatedAt : {
        type : Date,
        Default : Date.now
    }
});

const QuestionModel = mongoose.model('Question', QuestionSchema);

export default QuestionModel
