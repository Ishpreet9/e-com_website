import mongoose from 'mongoose';

const productSchmea = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    images: {type: [String], required: true},
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    variants: {type: [String], required: true},
    date: {type: Date, default: Date.now},
})

const Product = mongoose.model('Product', productSchmea);

export default Product;