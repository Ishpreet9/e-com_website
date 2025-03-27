import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId: {type: String},
    //products is an array where each element has a productId and quantity 
    products: [
        {
            productId: {type: String, required: true},
            quantity: {type: Number, default: 1}
        }
    ]
});

const Cart = mongoose.model('Cart',cartSchema);

export default Cart;