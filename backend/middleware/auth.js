import jwt, { decode } from 'jsonwebtoken';
import 'dotenv/config'

const authMiddleware = (req, res, next) => {
    try {
        const token = req.header("token");
        if(!token){
            return res.json({success:false,message: 'Not authorized ! Try again'});
        }
        // token = token.replace("Bearer ", "");
        // console.log("Token recieved",token, typeof token);
        const token_decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(token_decoded.username != process.env.ADMIN_USERNAME) //use token_decoded.username becuase in user controller, the username is sent as an object for expirey to work 
        {
            return res.json({success:false,message: 'Not authorized ! Try again'});
        }
        next();
    } catch (error) {
        res.json({success:false,message: error.message});
    }
};

export default authMiddleware;