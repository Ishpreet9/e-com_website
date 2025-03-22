import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 200;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({}); //cartItems will store count of all variants based on the item (item object (with all the variants and their count) inside cartItems object)
    // Like this :-
    // let cartItems = {
    //     "itemId1": {
    //         "variant1": count1, // Example: item1 could be a T-shirt with "Red" variant
    //         "variant2": count2  // Another variant, e.g., "Blue" size for the T-shirt
    //     },
    //     "itemId2": {
    //         "variant1": count1 // Another item, like a pair of shoes with a specific variant
    //     },
    //     // More items...
    // };

    const addToCart = (itemId, variant) => {
        let cartData = structuredClone(cartItems);

        //check if cart already has the item 
        if (cartData[itemId]) {
            // if cart already has the specific variant, increment count by 1 
            if (cartData[itemId][variant]) {
                cartData[itemId][variant] = Number(cartData[itemId][variant]) + 1;
            }
            // If the variant is not found, set its count to 1
            else {
                cartData[itemId][variant] = 1;
            }
        }
        else {
            // If the item is not in the cart at all, add it to the cart with the given variant
            cartData[itemId] = {}; // Create an empty object for this item
            cartData[itemId][variant] = 1; // Add the variant with a count of 1
        }
        // Update the state of the cart items
        setCartItems(cartData);
    }


    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            for (const itemVariant in cartItems[item]) {
                try {
                    if (cartItems[item][itemVariant] > 0) {
                        totalCount += cartItems[item][itemVariant] //increment with the number of that product with specific variant
                    }
                }
                catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = (itemId, variant, quantity) => {

        let cartData = structuredClone(cartItems);
        cartData[itemId][variant] = Number(quantity); //changing value of the quantity of the specific item  with specific variant
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            let itemInfo = products.find((product) => product._id === item) //find and store the product from products array (note: item represents item_id in the cartItems object)
            for (const variant in cartItems[item]) {
                try {
                    if (cartItems[item][variant] > 0) {
                        totalAmount += itemInfo.price * cartItems[item][variant]; //item price x number of items
                    }
                }
                catch (error) {

                }
            }
        }
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            // console.log(response.data.products);
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductsData();
    },[])

    useEffect(()=>{
        console.log('Products data: ',products);
    },[products])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, backendUrl, getProductsData
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;