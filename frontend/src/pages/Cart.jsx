import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Cart() {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  
  const [cartData,setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const item in cartItems)
    {
      for(const itemVariant in cartItems[item])
      {
        if(cartItems[item][itemVariant] > 0)
        {
          tempData.push({
            _id: item,
            variant: itemVariant,
            quantity: cartItems[item][itemVariant]
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems]);

  return (
    <div className='border-t pt-10'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{ 
            const productData = products.find((product)=>product._id === item._id); //find the product from products using it's id, then display it
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6 '>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-lg sm:text-xl font-semibold text-gray-200'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2 text-lg'>
                      <p className='text-gray-200'>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-black bg-opacity-25 text-gray-200'>{item.variant}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>updateQuantity(item._id,item.variant,e.target.value)} className='border border-white bg-black bg-opacity-25 text-white max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 active:border-yellow-400' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,item.variant,0)} className='w-[29px] mb-2 cursor-pointer filter invert brightness-0' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-start my-10'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
        </div>
        <div className='w-full text-center'>
          <NavLink to={'/place-order'}>
            <button className='bg-black bg-opacity-25 border-2 border-white border-opacity-75 text-white font-medium text-lg my-16 px-6 py-5 active:border-yellow-400 active:bg-black active:bg-opacity-50'>PROCEED TO CHECKOUT</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Cart