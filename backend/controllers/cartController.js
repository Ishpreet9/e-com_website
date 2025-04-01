// cart controller only stores product id's 

import Cart from "../models/cartModel.js";

const addToCart = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        let cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            cart = new Cart({
                userId,
                products: [{ productId }]
            })
        }
        else {
            const productIndex = cart.products.findIndex(p => p.productId === productId);

            //if the product exists, update the quantity 
            if (productIndex > -1) {
                cart.products[productIndex].quantity++;
            }
            else {
                cart.products.push({ productId, quantity: 1 });
            }
        }

        await cart.save();

        res.status(200).json({ success: true, message: "Product added to cart" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update cart", error: error.message });
    }

}

const removeFromCart = async (req, res) => {

    try {
        const { productId, userId } = req.body;
        let cart = await Cart.findOne({ userId: userId });
        if (!cart) {
            return res.status(404).json({ success: false, message: 'Cart does not exist for the specified user' });
        }
        else {
            const productIndex = cart.products.findIndex(p => p.productId === productId);

            //product does not exist
            if (productIndex <= -1) {
                return res.status(404).json({ success: false, message: 'Product not found in cart' });
            }
            // if more than one product of the same type
            if (cart.products[productIndex].quantity > 1) {
                cart.products[productIndex].quantity--;
            }
            // if only one product exists, then remove the whole entire product
            else {
                cart.products.splice(productIndex, 1);
                //if cart is empty after removing, remove cart for that specific user 
                if(cart.products.length === 0)
                {
                    await Cart.deleteOne({_id: cart._id}); //delete empty cart
                    return res.status(200).json({success: true, message: 'Product removed and empty cart deleted'});
                }
            }
            await cart.save();
            return res.status(200).json({ success: true, message: 'Product removed from cart' })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error, product not removed', error: error.message });
    }

}

export { addToCart, removeFromCart };