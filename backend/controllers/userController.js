import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authMiddleware from '../middleware/auth.js';
import 'dotenv/config'

const registerUser = async (req,res) => {
    try {
        const {username, password } = req.body;
        
        //check if already exist as username should be unique 
        const existingUser = await User.findOne({username});
        if(existingUser) {
            return res.status(400).json({message: 'Username already taken'})
        }

        //create and save user
        const user = new User({username, password});
        await user.save(); //password hashed using userSchema.pre

        res.status(201).json({message: 'User registered succesfully'});
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message})
    }
}

const loginUser = async (req,res) => {
    try {
        const {username, password} = req.body;

        //find user and include password explicitly because of select: false to prevent accidental password expose
        const user = await User.findOne({username}).select('+password');
        if(!user){
            return res.status(400).json({message: 'Invalid username or password'});
        }

        //compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(400).json({message: 'Invalid username or password'});
        }

        //generate jwt token
        const token = jwt.sign(
            {
                id: user._id //payload with user id
            },
            process.env.JWT_SECRET, //jwt secret from .env
            {
                expiresIn: '7d'
            }
        );

        res.status(200).json({message: 'Login successful', token}); //login successful message along with token
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message });
    }
}

export { loginUser,registerUser };