import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Add = () => {

  const [VariantsCount,setVariantsCount] = useState(0); //initial count 

  return (
    <form className='mx-16 my-8 inline-flex flex-col gap-3'>
      <div className='inline-flex flex-col gap-3'>
        <p className='text-xl font-semibold text-neutral-200'>Upload Images...</p>
        <div className='flex gap-6'>
          <label htmlFor="image1" className='inline-flex p-5 bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300'>
              <img src={assets.upload} alt="" className='w-16 filter invert opacity-40'/>
            <input type="file" id='image1' hidden/>
          </label>
          <label htmlFor="image2" className='inline-flex p-5 bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300'>
              <img src={assets.upload} alt="" className='w-16 filter invert opacity-40'/>
            <input type="file" id='image2' hidden/>
          </label>
          <label htmlFor="image3" className='inline-flex p-5 bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300'>
              <img src={assets.upload} alt="" className='w-16 filter invert opacity-40'/>
            <input type="file" id='image3' hidden/>
          </label>
          <label htmlFor="image4" className='inline-flex p-5 bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300'>
              <img src={assets.upload} alt="" className='w-16 filter invert opacity-40'/>
            <input type="file" id='image4' hidden/>
          </label>
        </div>
      </div>
      <div className='mt-6 inline-flex flex-col gap-3'>
          <p className='text-xl font-semibold text-neutral-200'>Product Name</p>
          <input type="text" placeholder='Enter product name' required className='w-full max-w-[500px] px-4 py-2 bg-neutral-700 text-lg font-medium rounded-md outline-none placeholder-neutral-500' />
      </div>
      <div className='mt-6 inline-flex flex-col gap-3'>
          <p className='text-xl font-semibold text-neutral-200'>Product Description</p>
          <textarea placeholder='Enter product description' required className='w-full max-w-[500px] min-h-32 px-4 py-2 bg-neutral-700 text-lg font-medium rounded-md outline-none placeholder-neutral-500' />
      </div>
      <div className='mt-6 inline-flex flex-col gap-3'>
        <p className='text-xl font-semibold text-neutral-200'>Add Variants</p>
        <div className='flex gap-4'>
          {[...Array(VariantsCount)].map((_,index)=>(
            <input key={index} type="text" className='px-3 py-2 bg-neutral-700 text-lg font-medium rounded-md outline-none placeholder-neutral-500' />
          ))}
          <button type='button' onClick={()=>setVariantsCount(VariantsCount+1)} className='bg-black bg-opacity-60 p-3 rounded-lg'>Add Variants +</button>
        </div>
      </div>
      <div className='mt-6 inline-flex gap-3'>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-xl font-semibold text-neutral-200'>Category</p>
          <select className='bg-neutral-700 text-neutral-200 text-lg p-2 rounded-md min-w-40 outline-none'>
            <option value="default">Default</option>
            <option value="Category1">Category1</option>
            <option value="Category2">Category2</option>
            <option value="Category3">Category3</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-xl font-semibold text-neutral-200'>Sub Category</p>
          <select className='bg-neutral-700 text-neutral-200 text-lg p-2 rounded-md min-w-40 outline-none'>
            <option value="default">Default</option>
            <option value="Category1">SubCategory1</option>
            <option value="Category2">SubCategory2</option>
            <option value="Category3">SubCategory3</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-xl font-semibold text-neutral-200'>Price (₹)</p>
          <input type="number" className='bg-neutral-700 text-neutral-200 text-lg p-2 rounded-md max-w-40 outline-none'/>
        </div>
      </div>
      <div>
        <button className='bg-black mt-8 text-xl font-bold text-neutral-200 rounded-lg bg-opacity-60 hover:bg-opacity-80 px-14 py-4 transition-all duration-200'>ADD</button>
      </div>
    </form>
  )
}

export default Add
