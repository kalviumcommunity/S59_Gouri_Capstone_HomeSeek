import React from 'react'
import HomePage from './pages/homePage/homepage'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from './pages/layout/layout';
import ListPage from './pages/listPage/listPage';
import SinglePage from './pages/singlePage/singlePage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout key="layout"/>,
      children:[
        {
          path:"/",
          element:<HomePage key="home"/>
        },
        {
          path:"/list",
          element:<ListPage key="list"/>
        },
        {
          path:"/:id",
          element:<SinglePage key="single"/>
        }
      ]
    },
    
  ]);
  return (


    <RouterProvider router={router} />
  )
}

export default App