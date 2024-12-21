import React, { useContext, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const { pathname } = useLocation();
    const [visible,setVisible] = useState(false);
    const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <>
    <div className='flex item-center justify-between py-3 font-medium'>
        
        <img src={assets.logo} className='w-[60px] filter invert brightness-0 object-cover' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 py-4'>

            <NavLink to='/' className={`${pathname === '/' ? 'bg-yellow-400 bg-opacity-25 px-4 border-2 border-yellow-400 border-opacity-50 rounded-sm' : 'border-2 border-transparent'} px-2 py-1 transition-all duration-500 ease-in-out flex flex-col items-center gap-1 text-white`}>
                <p className='text-lg'>Home</p>      
            </NavLink>
            <NavLink to='/collection' className={`${pathname === '/collection' ? 'bg-yellow-400 bg-opacity-25 px-4 border-2 border-yellow-400 border-opacity-50 rounded-sm' : 'border-2 border-transparent'} px-2 py-1 transition-all duration-500 ease-in-out flex flex-col items-center gap-1 text-white`}>
                <p className='text-lg'>Collection</p>      
            </NavLink>
            <NavLink to='/about' className={`${pathname === '/about' ? 'bg-yellow-400 bg-opacity-25 px-4 border-2 border-yellow-400 border-opacity-50 rounded-sm' : 'border-2 border-transparent'} px-2 py-1 transition-all duration-500 ease-in-out flex flex-col items-center gap-1 text-white`}>
                <p className='text-lg'>About</p>      
            </NavLink>
            <NavLink to='/contact' className={`${pathname === '/contact' ? 'bg-yellow-400 bg-opacity-25 px-4 border-2 border-yellow-400 border-opacity-50 rounded-sm' : 'border-2 border-transparent'} px-2 py-1 transition-all duration-500 ease-in-out flex flex-col items-center gap-1 text-white`}>
                <p className='text-lg'>Contact</p>      
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
            <NavLink to={'/collection'}>
                <img onClick={()=>setShowSearch(!showSearch)} src={assets.search_icon} className='w-[34px] filter invert brightness-0 cursor-pointer' alt="search_icon" />
            </NavLink>

            <div className='group relative'>
                <Link to='/login'><img src={assets.profile_icon} className='w-[25px] filter invert brightness-0 cursor-pointer' alt="profile_icon" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-1 w-36 py-3 px-2 bg-white bg-opacity-25 text-white rounded'>
                        <p className='bg-black bg-opacity-75 px-2 rounded-sm cursor-pointer hover:bg-opacity-25'>My Profile</p>
                        <p className='bg-black bg-opacity-75 px-2 rounded-sm cursor-pointer hover:bg-opacity-25'>Orders</p>
                        <p className='bg-black bg-opacity-75 px-2 rounded-sm cursor-pointer hover:bg-opacity-25'>Logout</p>
                    </div>
                </div>
            </div>

            <NavLink to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-[28px] filter invert brightness-0' alt="cart_icon" />
                <p className='absolute right-[-5px] bottom-[14px] w-4 text-center leading-4 bg-gray-900 bg-opacity-75 text-white aspect-square rounded-full text-[9px]'>{getCartCount()}</p>
            </NavLink>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-[25px] cursor-pointer sm:hidden filter invert brightness-0' alt="menu_icon" />
        </div>

        {/* small screen menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600 '>
                <div onClick={()=>{
                    setVisible(false)
                }} className='flex items-center gap-1 p-3'>
                    <img src={assets.back_icon} className='h-4' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/contact'>Contact</NavLink>

            </div>

        </div>

    </div>
    <hr className='h-[0.1px] border-0 bg-gray-300'/>
    {/* <br /> */}
    </>
  )
}

export default Navbar
