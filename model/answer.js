import mongoose from 'mongoose'
const answerSchema = mongoose.Schema ({
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

const answerModel = mongoose.model('Answer', answerSchema)

export default answerModel