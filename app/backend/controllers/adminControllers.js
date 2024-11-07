import User from "../models/userModel";

export const blockUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const blockedUser = await User.findByIdAndUpdate(userId, {isActive: false}, {new: true});
        res.status(200).json({message: 'Usuario bloqueado', user: blockedUser});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const changeUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const {role} = req.body;
        const updateUser = await User.findByIdAndUpdate(userId, {role}, {new: true});
        res.status(200).json({message: 'Rol de usuario actualizado, user: updateUser'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

