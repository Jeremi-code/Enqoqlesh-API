import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    apiKey : {
        type : String,
        required : true,
        Unique : true
    }
})

const AdminModel = mongoose.model('Admin',AdminSchema)

export default AdminModel