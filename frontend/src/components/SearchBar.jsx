import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible,setVisible] = useState(false);
    const [yellowBorder, setYellowBorder] = useState(false);
    const location = useLocation(); //gives the current route location 
    useEffect(()=>{
        if(location.pathname.includes('collection')) //if we are on collection route and showSearch is true
        {
            setVisible(true);
        }
        else
        {
            setVisible(false);
        }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b  bg-gray-50 mb-6 text-center flex items-center justify-center bg-dark-mode'>
        <div className='inline-flex itemx-center justify-center border-2 border-gray-400 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-black bg-opacity-25'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-lg px-5 py-2 flex-1 rounded-full' />
        </div>
        <img onClick={()=>{
            setShowSearch(false);
            setSearch('');
        }}
        src={assets.cross_icon} alt="" className='filter invert w-4 cursor-pointer opacity-60'/>
    </div>
  ) : null
}

export default SearchBar
