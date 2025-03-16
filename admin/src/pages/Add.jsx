import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App.jsx';
import { toast } from 'react-toastify';

const Add = ({token}) => {

  const [image1,setImage1] = useState(false);
  const [image2,setImage2] = useState(false);
  const [image3,setImage3] = useState(false);
  const [image4,setImage4] = useState(false);
  const [imageUrls,setImageUrls] = useState([null,null,null,null]);
   
  const [name,setName] = useState('');
  const [description,setDescription] = useState(''); 
  const [price,setPrice] = useState(''); 
  const [category,setCategory] = useState('default'); 
  const [subCategory,setSubCategory] = useState('default'); 
  const [variants,setVariants] = useState([]);

  const addVariant = () => {
    setVariants([...variants,'']);
  }

  //handle variant input field change 
  const handleVariantChange = (index,value) => {
    const newVariant = [...variants];
    newVariant[index] = value;
    setVariants(newVariant);
  }

  const handleImageChange = (index, file) => {
    if(!file) return;

    //clean up previous object url 
    if(imageUrls[index])
    {
      URL.revokeObjectURL(imageUrls[index]);
    }

    //set the new url
    const newUrls = [...imageUrls];
    newUrls[index] = URL.createObjectURL(file);
    setImageUrls(newUrls);

    //update image states for controlled component 
    switch (index) {
      case 0:
        setImage1(file);
        break;
      case 1:
        setImage2(file);
        break;
      case 2:
        setImage3(file);
        break;
      case 3:
        setImage4(file);
        break;
      default:
        break;
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();

      formData.append("name",name);
      formData.append("description",description);
      formData.append("price",price);
      formData.append("category",category);
      formData.append("subCategory",subCategory);
      formData.append("variants",JSON.stringify(variants));

      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      image3 && formData.append("image3",image3);
      image4 && formData.append("image4",image4);

      const response = await axios.post(backendUrl+'/api/product/add',formData,{headers:{token}});
      
      if(response.data.success)
      {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setPrice('');
        setCategory('default');
        setSubCategory('default');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setVariants([]);
      }
      else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  //cleanup on component dismount
  useEffect(()=>{
    return ()=>{
      imageUrls.forEach(url=>{
        if (url) URL.revokeObjectURL(url);
      })
    }
  },[])

  return (
    <form className='mx-16 my-8 inline-flex flex-col gap-2' onSubmit={onSubmitHandler} >
      <div className='inline-flex flex-col gap-2'>
        <p className='text-lg font-semibold text-neutral-200'>Upload Images...</p>
        <div className='flex gap-6'>
          <label htmlFor="image1" className={`inline-flex bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-32 h-32 ${image1 ? 'p-0' : 'p-5'}`}>
              <img src={!image1 ? assets.upload : imageUrls[0]} alt="" className={!image1 ? 'w-16 filter invert opacity-40' : 'w-full h-full object-cover'}/>
            <input onChange={(e)=>handleImageChange(0, e.target.files[0])} type="file" id='image1' hidden/>
          </label>
          <label htmlFor="image2" className={`inline-flex bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-32 h-32 ${image2 ? 'p-0' : 'p-5'}`}>
              <img src={!image2 ? assets.upload : imageUrls[1]} alt="" className={!image2 ? 'w-16 filter invert opacity-40' : 'w-full h-full object-cover'}/>
            <input onChange={(e)=>handleImageChange(1, e.target.files[0])} type="file" id='image2' hidden/>
          </label>
          <label htmlFor="image3" className={`inline-flex bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-32 h-32 ${image3 ? 'p-0' : 'p-5'}`}>
              <img src={!image3 ? assets.upload : imageUrls[2]} alt="" className={!image3 ? 'w-16 filter invert opacity-40' : 'w-full h-full object-cover'}/>
            <input onChange={(e)=>handleImageChange(2, e.target.files[0])} type="file" id='image3' hidden/>
          </label>
          <label htmlFor="image4" className={`inline-flex bg-neutral-700 rounded-lg justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-32 h-32 ${image4 ? 'p-0' : 'p-5'}`}>
              <img src={!image4 ? assets.upload : imageUrls[3]} alt="" className={!image4 ? 'w-16 filter invert opacity-40' : 'w-full h-full object-cover'}/>
            <input onChange={(e)=>handleImageChange(3, e.target.files[0])} type="file" id='image4' hidden/>
          </label>
        </div>
      </div>
      <div className='mt-6 inline-flex flex-col gap-2'>
          <p className='text-lg font-semibold text-neutral-200'>Product Name</p>
          <input type="text" placeholder='Enter product name' value={name} onChange={(e)=>{setName(e.target.value)}} required className='w-full max-w-[500px] px-4 py-2 bg-neutral-700 text-lg font-medium rounded-md outline-none placeholder-neutral-500' />
      </div>
      <div className='mt-6 inline-flex flex-col gap-2'>
          <p className='text-lg font-semibold text-neutral-200'>Product Description</p>
          <textarea placeholder='Enter product description' value={description} onChange={(e)=>{setDescription(e.target.value)}} required className='w-full max-w-[500px] min-h-32 px-4 py-2 bg-neutral-700 text-lg font-medium rounded-md outline-none placeholder-neutral-500' />
      </div>
      <div className='mt-6 inline-flex flex-col gap-2'>
        <p className='text-lg font-semibold text-neutral-200'>Add Variants</p>
        <div className='flex gap-4'>
          {variants.map((variant,index)=>(
          <div className='relative' key={index}>
            <input value={variant} onChange={(e)=>handleVariantChange(index,e.target.value)} placeholder={`Variant ${index+1}`} type="text" className='px-3 py-2 bg-neutral-700 text-lg font-medium rounded-md outline-none placeholder-neutral-500' />
          <img onClick={()=>{
            //to remove that specific variant
            const newVariant = variants.filter((_,i) => i!==index);
            setVariants(newVariant);
          }}
          src={assets.cross_icon}
          className='w-5 absolute right-2 font-extrabold text-2xl top-3 opacity-50 cursor-pointer hover:opacity-100 filter invert'/>
          </div>
        ))}
          <button type='button' onClick={()=>addVariant()} className='bg-black bg-opacity-60 p-3 rounded-lg'>Add Variants +</button>
        </div>
      </div>
      <div className='mt-6 inline-flex gap-3'>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-lg font-semibold text-neutral-200'>Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} value={category} className='bg-neutral-700 text-neutral-200 text-lg p-2 rounded-md min-w-40 outline-none'>
            <option value="default">Default</option>
            <option value="Category1">Category1</option>
            <option value="Category2">Category2</option>
            <option value="Category3">Category3</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-lg font-semibold text-neutral-200'>Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} value={subCategory} className='bg-neutral-700 text-neutral-200 text-lg p-2 rounded-md min-w-40 outline-none'>
            <option value="default">Default</option>
            <option value="Category1">SubCategory1</option>
            <option value="Category2">SubCategory2</option>
            <option value="Category3">SubCategory3</option>
          </select>
        </div>
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='text-lg font-semibold text-neutral-200'>Price (₹)</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} type="number" className='bg-neutral-700 text-neutral-200 text-lg p-2 rounded-md max-w-40 outline-none'/>
        </div>
      </div>
      <div>
        <button type='submit' className='bg-black mt-8 text-xl font-bold text-neutral-200 rounded-lg bg-opacity-60 hover:bg-opacity-80 px-14 py-4 transition-all duration-200'>ADD</button>
      </div>
    </form>
  )
}

export default Add
