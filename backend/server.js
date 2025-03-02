import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import indexRoutes from './routes/indexRoute.js';
import userRoutes from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import imageRoutes from './routes/imageRoute.js'

// app config 
const app = express();
const port = process.env.PORT || 4000 

connectDB()

// middlewares
app.use(express.json())
app.use(cors())
app.use(imageRoutes);
app.use('/', indexRoutes);
app.use('/api/user', userRoutes);
app.use('/api/product',productRouter);

// api endpoints

app.listen(port, ()=>console.log('Server started on PORT : '+ port))
