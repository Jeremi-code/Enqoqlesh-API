import mongoose from 'mongoose'
const AnswerSchema = mongoose.Schema ({
    answer: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    }
})

const AnswerModel = mongoose.model('Answer', AnswerSchema)

export default AnswerModel