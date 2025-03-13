import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

const Layout = ({setToken}) => {
  
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar setToken={setToken}/>
      <div className='flex flex-1 h-screen'>
        <div className='w-1/5 border-r-2'>
          <Sidebar />
        </div>
        <div className='w-4/5 overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
