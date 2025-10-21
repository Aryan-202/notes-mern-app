import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true});

const Note = mongoose.model.Note || mongoose.model("Note", noteSchema)

export default Note;