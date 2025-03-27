// cart controller only stores product id's 

const addToCart = (req,res) => {
    try {
        const { productId, userId } = req.body; 
    } catch (error) {
        
    }
    res.status(200).json({message: "Cart is working"});
}

export {addToCart};