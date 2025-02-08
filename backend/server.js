import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import indexRoutes from './routes/index.js';
import userRoutes from './routes/user.js';

// app config 
const app = express();
const port = process.env.PORT || 4000 
connectDB()

// middlewares
app.use(express.json())
app.use(cors())
app.use('/', indexRoutes);
app.use('/api/user', userRoutes);

// api endpoints

app.listen(port, ()=>console.log('Server started on PORT : '+ port))
