import mongoose from 'mongoose'

const questionSchema =  mongoose.Schema({
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

const questionModel = mongoose.model('Question', questionSchema);

export default questionModel
