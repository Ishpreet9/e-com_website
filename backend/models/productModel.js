import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    images: {type: [String], required: true},
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    variants: {type: [String], required: true},
    date: {type: Date, default: Date.now},
})

productSchema.index({name: "text", description: "text"});

const Product = mongoose.model('Product', productSchema);

export default Product;