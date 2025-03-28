// cart controller only stores product id's 

import Cart from "../models/cartModel.js";

const addToCart = async (req,res) => {
    try {
        const { productId, userId } = req.body;
        let cart = await Cart.findOne({userId: userId});
        if(!cart)
        {
            cart = new Cart({
                userId,
                products: [{ productId }]
            })
        }
        else{
            const productIndex = cart.products.findIndex(p=>p.productId === productId);

            //if the product exists, update the quantity 
            if(productIndex>-1)
            {
                cart.products[productIndex].quantity++; 
            }
            else
            {
                cart.products.push({productId, quantity: 1});
            }
        }

        await cart.save();
        
        res.status(200).json({success: true, message: "Product added to cart"});
    } catch (error) {
        res.status(500).json({success: false, message: "Failed to update cart", error: error.message});
    }

}

export {addToCart};