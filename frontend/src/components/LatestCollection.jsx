import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title';

const LatestCollection = () => {
    
    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[products])

    console.log(latestProducts);
    
  return (
    <>
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((product,index)=>(
              <ProductItem key={index} id={product._id} imageName={product.images[0]} name={product.name} price={product.price} />
            ))
          }
        </div>
    </div>
    <hr className='h-[0.1px] border-0 bg-gray-300'/>
    </>
  )
}

export default LatestCollection
