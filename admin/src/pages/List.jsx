import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {backendUrl} from '../App.jsx';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

const List = ({token}) => {

  const [list,setList] = useState([]);

  const removeProduct = async (_id) => {
    try {

      const response = await axios.post(backendUrl+'/api/product/remove',{_id},{headers:{token}})
      
      if(response.data.success)
      {
        toast.success(response.data.message);
        await fetchList();
      }
      else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl+'/api/product/list');
      console.log(response.data);
      if(response.data.success)
      {
        setList(response.data.products);
      }
      else
      {
        toast.error(res.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='m-10'>
      <p className='mb-2 text-xl'>All Products List</p>
      <div>
        <div className='grid grid-cols-4 items-center text-center bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-70 mb-4'>
          <b>Image</b>
          <b>Name</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <div className='flex flex-col gap-4'>
        {
          list.map((item,index) => (
            <div key={index} className='grid grid-cols-4 place-items-center text-center border-2 border-neutral-600 py-3'>
            <div className='w-24 h-24'>
            <img src={`${backendUrl}/static/images/${item.images[0]}`} alt="" className='w-full h-full object-cover'/>
            </div>
            <p>{item.name}</p>
            <p>Rs.{item.price}</p>
            <img onClick={()=>removeProduct(item._id)} src={assets.bin} alt="" className='w-10 h-10 cursor-pointer hover:scale-110 duration-300'/>
          </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}

export default List
