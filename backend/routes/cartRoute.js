import express from 'express';
import { addToCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/add-to-cart',addToCart);

export default router;