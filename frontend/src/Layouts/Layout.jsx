import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Outlet/>
    </div>
  )
}

export default Layout
