import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products } = useContext(ShopContext);
  useEffect(() => {
    console.log(products);
  }, [products])

  return (
    <div>
      <div className='text-4xl font-bold mt-10'>
        <Title text1={'ALL'} text2={'COLLECTIONS'}/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gapy-6'>
        {
          products.map((product,index)=>(
            <ProductItem key={index} id={product._id} imageName={product.images[0]} name={product.name} price={product.price} />
          ))
        }
      </div>
      {/* {products.map((product, index) => (
        <p key={index}>{product.name} </p>
      ))} */}
    </div>

  )
}

export default Collection

