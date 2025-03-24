import Product from "../models/productModel.js";

const addProduct = async (req,res) => {
    try {
        const { name, description, price, category, subCategory, variants } = req.body;

        //trying to access the properties of something that is undfined causes and error (here image1[0]), so we use && so that if the image is undefined the the code line will return undefined directly instead of an error
        //use optional chaining or guard clauses here 
        const image1 = req.files.image1?.[0];
        const image2 = req.files.image2?.[0];
        const image3 = req.files.image3?.[0];
        const image4 = req.files.image4?.[0];

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined).map((item)=>item.filename);

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            variants,
            images,
            date: Date.now()
        }

        console.log(productData);
        console.log(images);

        const product = new Product(productData);
        await product.save();

        res.json({success:true,message:"Product Added"});

    } catch (error) {
        res.json({success:false, message:error.message})
    }
} 

const removeProduct = async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.body._id);
        res.json({success:true,message:"Product removed"});
    } catch (error) {
        res.json({success:true,message:error.message});
    }
}

const singleProduct = async (req,res) => {
    try {

        const {productId} = req.body;
        const product = await Product.findById(productId);
        res.json({success:true,product}); 

    } catch (error) {
        res.json({success:true,message:error.message});
    }
}

const listProducts = async (req,res) => {

    const {search} = req.query;
    
    try {

        if(search)
        {
            const products = await Product.find({
                $text: {
                    $search: search,
                }
            })
            res.json({success:true,products});
        }
        else
        {
            const products = await Product.find({});
            res.json({success:true,products});
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {addProduct,removeProduct,singleProduct,listProducts};


