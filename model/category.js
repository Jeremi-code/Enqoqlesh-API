import mongoose from "mongoose";

const CategorySchema = mongoose.schema ( {
     name : {
        type : String,
        required : true 
    },
     createdAt : {
        type : Date,
        Default : Date.now
     },
     updatedAt : {
        type : Date,
        Default : Date.now
     }
})

const categoryModel = mongoose.model ('Category' , CategorySchema)

export default categoryModel