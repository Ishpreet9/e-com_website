
const addProduct = async (req,res) => {
    try {
        const { name, description, price, category, subCategory, variants, bestSeller } = req.body;

        //trying to access the properties of something that is undfined causes and error (here image1[0]), so we use && so that if the image is undefined the the code line will return undefined directly instead of an error
        //use optional chaining or guard clauses here 
        const image1 = req.files.image1?.[0]; 
        const image2 = req.files.image2?.[0];
        const image3 = req.files.image3?.[0];
        const image4 = req.files.image4?.[0];

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined);

        console.log(name, description, price, category, subCategory, variants, bestSeller);
        console.log(images);

        res.json({});

    } catch (error) {
        res.json({success:false, message:error.message})
    }
} 

const removeProduct = (req,res) => {

}

const singleProduct = (req,res) => {

}

const listProducts = (req,res) => {

}

export {addProduct,removeProduct,singleProduct,listProducts};


