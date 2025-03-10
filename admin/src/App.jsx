import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'
import Layout from './Layouts/Layout';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>, 
      children: [
        {
          path: "/",
          element: <Add/>
        },
        {
          path: "/list",
          element: <List/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
