import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";


export const registerUser = async (req, res) =>{
    const {username, email, password} = req.body;
    try {
    // encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });
        await newUser.save();
        res.status(201).json({newUser});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (user && await bcrypt.compare(password, user.password)){
            const token = jsonwebtoken.sign({userId: user._id}, 'secret', {expiresIn: '1h'});
            res.status(200).json({message: 'Inicio de sesión exitoso', token});
        }else{
            res.status(401).json({message: 'Datos incorrectos'});
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const resetPassword = async (req, res) => {
    try {
        const {token, newPassword} = req.body;
        const coded = jsonwebtoken.verify(token, 'secret');
        
        const hashedPassword= await bcrypt.hash(newPassword, 10);

        await User.findByIdAndUpdate(coded.userId, {password: hashedPassword});
        res.status(200).json({message: 'Contraseña restablecida'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

