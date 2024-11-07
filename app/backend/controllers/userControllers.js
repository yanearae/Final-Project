import User from "../models/userModel.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateUser = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(`${req.params.id}`);
        const updateUser = await User.findByIdAndUpdate(userId, req.body, {new: true});
        if(!updateUser) return res.status(404).json({message: "No se encontro el usuario"})
        else res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(`${req.params.id}`);
        const deleted = {deleted:true};
        const deleteUser = await User.findByIdAndUpdate(userId, deleted, {new: true});
        if(deleteUser) res.status(200).json({message: "Usuario eliminado"});
        else return res.status(404).json({message: "No se encontro el usuario"})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}