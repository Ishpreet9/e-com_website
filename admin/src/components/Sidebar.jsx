import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

  const location = useLocation();
  const current_route = location.pathname;
  
  return (
    <div className='mt-20 flex flex-col gap-10 items-end'>
      {/* add button  */}
      <NavLink className={`flex items-center justify-center gap-5 border-2 rounded-l-lg border-r-0 w-52 transition-all duration-500 ${current_route === '/' ? 'border-yellow-400 border-opacity-70 bg-yellow-400 bg-opacity-10 text-neutral-100' : 'border-neutral-200 text-neutral-200 bg-black bg-opacity-50'}`} to={'/'}transition-all duration-500 >
        <img src={assets.add} alt="" className='w-10 py-2 filter invert opacity-75'/>
        <p className='font-semibold text-xl'>Add Items</p>
      </NavLink>
      {/* list button  */}
      <NavLink className={`flex items-center justify-center gap-5 border-2 rounded-l-lg border-r-0 w-52 transition-all duration-500 ${current_route === '/list' ? 'border-yellow-400 border-opacity-70 bg-yellow-400 bg-opacity-10 text-neutral-100' : 'border-neutral-200 text-neutral-200 bg-black bg-opacity-50'}`} to={'/list'}>
        <img src={assets.list} alt="" className='w-10 py-2 filter invert opacity-75'/>
        <p className='font-semibold text-xl'>List Items</p>
      </NavLink>
      {/* orders button  */}
      <NavLink className={`flex items-center justify-center gap-5 border-2 rounded-l-lg border-r-0 w-52 transition-all duration-500 ${current_route === '/orders' ? 'border-yellow-400 border-opacity-70 bg-yellow-400 bg-opacity-10 text-neutral-100' : 'border-neutral-200 text-neutral-200 bg-black bg-opacity-50'}`} to={'/orders'}transition-all duration-500 >
        <img src={assets.box} alt="" className='w-10 py-2 filter invert opacity-75 mr-5'/>
        <p className='font-semibold text-xl'>Orders</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
