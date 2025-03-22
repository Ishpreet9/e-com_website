import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,imageName,name,price}) => {

    const { currency,backendUrl } = useContext(ShopContext);

  return (
    <Link className='text-gray-200 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out duration-500' src={backendUrl+'/static/images/'+imageName} alt="" />
        </div>
        <p className='pt-3 pb-1 test-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
