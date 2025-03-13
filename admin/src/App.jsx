import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'
import Layout from './Layouts/Layout';
import Login from './components/Login.jsx'
import { ToastContainer } from 'react-toastify';


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(()=>{
    localStorage.setItem('token',token);
  },[token]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setToken={setToken}/>,
      children: [
        {
          path: "/",
          element: <Add />
        },
        {
          path: "/list",
          element: <List />
        },
        {
          path: "/orders",
          element: <Orders />
        },
      ]
    }
  ]);

  return (
    <div>
      <ToastContainer theme='dark' position='bottom-right'/>
      {token === ''
        ? <Login setToken={setToken} /> :
        <RouterProvider router={router} />
      }
    </div>
  )
}

export default App
