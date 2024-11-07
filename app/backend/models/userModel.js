import mongoose from "mongoose";

//Esquema del Usuario (User)
const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
},
email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Correo electrónico no válido']
},
password: {
    type: String,
    required: true,
},
profilePicture: {
    type: String,
    default: ''
},
bio: {
    type: String,
    maxlength: 150
},
followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}],
following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
}],
posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
}],
role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
},
subscription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subscription'
},
createdAt: {
    type: Date,
    default: Date.now
},
updatedAt: {
    type: Date,
    default: Date.now
},
deleted: {
    type: Boolean,
    default: false
}
});

const User = mongoose.model('User', userSchema);
export default User;



