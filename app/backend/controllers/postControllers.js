import Post from "../models/postModel";
import mongoose from "mongoose";

export const getPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    try {
        const {content, media} = req.body;
        const author = req.user._id;
        const newPost = new Post({
            author,
            content,
            media
        });
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = new mongoose.Types.ObjectId(`${req.params.postId}`);
        const updatePost = await Post.findByIdAndUpdate(post, req.body, {new: true});
        if (!updatePost) return res.status(404).json({ error: "Publicación no encontrada" });
        res.status(200).json(updatePost);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = new mongoose.Types.ObjectId(`${req.params.postId}`);
        const deletedPost = await Post.findByIdAndDelete(post);
        if (!deletedPost) return res.status(404).json({ error: "Publicación no encontrada" });
        res.status(200).json({ message: "Publicación eliminada correctamente" });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
