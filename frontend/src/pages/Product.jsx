import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

function Product() {

  const {productId} = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [selectedVariant,setSelectedVariant] = useState('');

  //this part might have potential issues related to async if it needs data fetching in future, note for future use
  const fetchProductData = () => {
    const item = products.find((item)=>item._id === productId);
        setProductData(item);
        setImage(item.image[0]);
  }

  useEffect(()=>{
    fetchProductData();
  },[productId]) //might need to use products here later

  //for setting default variant
  useEffect(()=>{
    if(productData && productData.variants)
    {
    setSelectedVariant(productData.variants[0]);
    }
  },[productData])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* product information */}
        <div className='flex-1'>
          <h1 className='font-medium text-3xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.half_star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Variant</p>
            <div className='flex gap-2'>
              {productData.variants.map((item,index)=>(
                <button onClick={()=>setSelectedVariant(item)} className={`border py-2 px-4 bg-gray-100 ${item === selectedVariant ? 'border-red-500 bg-red-50' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,selectedVariant)} className='bg-gray-800 text-white px-8 py-3 text-sm active:bg-black'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>Free Delivery on All Orders</p>
            <p>Backed With A 1-Year Warranty for Assurance</p>
            <p>Changed Your Mind? Enjoy Hassle-Free Returns Anytime!</p>
          </div>
        </div>
      </div>
      {/* description and review */}
      <div className='mt-10'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, nisi consequatur totam quia praesentium ipsam et aliquam quo odio voluptatum vero mollitia dolore debitis suscipit sed maxime iure reprehenderit corporis voluptatem eius voluptatibus quod excepturi. Nobis eius fuga asperiores distinctio quidem accusamus odio laboriosam, quae quis eos aspernatur molestias corrupti amet vitae nesciunt sequi suscipit maiores porro ad velit reprehenderit perspiciatis? Explicabo veritatis quod quibusdam reiciendis vero suscipit culpa porro blanditiis sunt, enim dolorem numquam asperiores quia excepturi nam animi commodi repellat cupiditate est eum possimus voluptatibus debitis? Quia velit cupiditate sunt quo consequuntur amet ratione commodi minus? Autem, quia.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto, maiores accusamus natus fugiat, commodi aut dolor cupiditate ipsa quaerat, maxime id consectetur omnis architecto. Blanditiis pariatur, impedit fugit et vero voluptate ut dolorum esse, qui aliquid corrupti. Suscipit sed laborum dolor perspiciatis quidem soluta temporibus exercitationem aperiam? Aut iusto ratione, aliquam non ut illo, deserunt enim facilis asperiores pariatur corporis officia id dicta voluptates totam adipisci. Sit, fuga. Fugiat incidunt commodi ipsum inventore at ab. Quam ipsum, officia, doloribus delectus dicta et nulla rem, repudiandae tempore minus vitae sapiente. Sequi, sapiente blanditiis consequuntur culpa expedita vel eos iusto voluptates.</p>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts category={productData.category}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product