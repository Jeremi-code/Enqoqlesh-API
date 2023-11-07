import mongoose from 'mongoose'
const AnswerSchema = mongoose.Schema ({
    text: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: false
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