import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {lazy, Suspense} from 'react';
import { RouterProvider, createBrowserRouter, Outlet, Link } from "react-router-dom";
import { Productdetails } from './component/productdetails.jsx'
import { Layout } from './component/Layout.jsx'
import  Home  from './component/Home.jsx'
import { Abc } from './component/Abc.jsx'
import { Hookform } from './component/Hookform.jsx'
const Homelazy=lazy(()=>import('./component/Home.jsx'));  // <-- lazy load Products
const H = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      
      { 
        path:'product',
        element: <Suspense fallback={<div>Loading...</div>}><Homelazy /></Suspense>

      
      },
      {
        path: 'product/:id',
        element: <Productdetails />
      },
      
    ],
  },
  {  
    path:"form",
    element:<Hookform />
    
  },
  {
        path: '*',
        element: <Abc />
      }
]);

export const App = () => {
  return (
  <>
  <RouterProvider router={H} />
  </>
      
  
  );
};

 