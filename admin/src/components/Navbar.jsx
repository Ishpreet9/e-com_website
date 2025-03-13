import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div>
      <div>
        {/* logo and button  */}
        <div className='flex justify-between items-center'>
          <div className='text-6xl py-4 px-6 mx-28 font-bold'>
            <img src={assets.logo} alt="" className='w-[70px] filter invert brightness-0'/>
          </div>
          <button className='bg-black px-5 py-3 h-fit my-4 mx-24 rounded-full text-xl font-semibold bg-opacity-50 border-2 border-white' onClick={()=>setToken('')}>
            LogOut
          </button>
        </div>
      </div>
      <hr className='h-[0.1px] border-0 bg-gray-300' />
    </div>
  )
}

export default Navbar
