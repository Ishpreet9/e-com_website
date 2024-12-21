import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';

function PlaceOrder() {

  const [method, setMethod] = useState('cod');

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-24 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="text" placeholder='First Name'/>
          <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="text" placeholder='Last Name'/>
        </div>
        <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="email" placeholder='E-mail Address'/>
        <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="text" placeholder='Delivery Address'/>
        <div className='flex gap-3'>
          <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="text" placeholder='State'/>
          <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="text" placeholder='Landmark'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="number" placeholder='Pin-Code'/>
          <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="text" placeholder='Country'/>
        </div>
        <input className='border border-gray-100 rounded py-1.5 px-3.5 w-full bg-black bg-opacity-25 text-white' type="number" placeholder='Mobile Number'/>
        <div className='mt-8'>
          <CartTotal />
        </div>
      </div>
      {/* right side */}
      <div className='flex flex-col gap-4 mt-12'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/> 
        </div>
        {/* payment method selection */}
        <div className='flex gap-3 flex-col'>
          <div onClick={()=>setMethod('upi')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer h-20'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'upi' ? 'bg-yellow-500' : ''}`}></p>
            <img className='w-24' src={assets.upi_logo} alt="" />
            <p className='text-gray-300 font-bold opacity-80 pl-12 text-xl'>--- Pay With UPI ---</p>
          </div>
          <div onClick={()=>setMethod('card')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer h-20'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'card' ? 'bg-yellow-500' : ''}`}></p>
            <img className='w-24' src={assets.card_logo} alt="" />
            <p className='text-gray-300 font-bold opacity-80 pl-12 text-xl'>--- Pay With Card ---</p>
          </div>
          <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer h-20'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-yellow-500' : ''}`}></p>
            <img className='w-24 filter invert opacity-50' src={assets.cod_logo} alt="" />
            <p className='text-gray-300 font-bold opacity-80 pl-10 text-xl'>--- Cash On Delivery ---</p>
          </div>
        </div>
        <NavLink to={'/orders'} className='w-full text-center mt-12'>
          <button className='bg-black bg-opacity-25 text-white font-bold text-lg border-2 border-white px-10 py-5 active:bg-black active-bg-opacity-50 active:border-yellow-400'>PLACE ORDER</button>
        </NavLink>
      </div>
    </div>
  )
}

export default PlaceOrder;
