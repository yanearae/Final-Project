import mongoose from "mongoose";

//Esquema de Conversación (Conversation)
const conversationSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    content: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

const Conversation = mongoose.model('Conversation', conversationSchema);
export default Conversation;
