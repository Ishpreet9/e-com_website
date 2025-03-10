import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  
  return (
    <div>
      <Navbar />
      <div className='flex flex-1 h-screen'>
        <div className='w-1/5 border-r-2'>
          <Sidebar />
        </div>
        <div className='w-4/5'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
