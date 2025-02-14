import jwt, { decode } from 'jsonwebtoken';
import 'dotenv/config'

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({message: 'Access denied. No token provided'});
    }
    
    try {
        token = token.replace("Bearer ", "");
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded; //store user id in 'req.user'
        next();
    } catch (error) {
        res.status(401).json({message: 'Invalid token'});
    }
};

export default authMiddleware;