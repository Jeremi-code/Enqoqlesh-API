import mongoose from 'mongoose'
import CategoryModel from '../model/category.js'
import AnswerModel from '../model/answer.js'


const QuestionSchema =  mongoose.Schema({
    text: {
        type: String,
        unique : true,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref : CategoryModel,
        required: true
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref : AnswerModel,
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
