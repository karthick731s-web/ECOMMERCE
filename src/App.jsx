import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, Outlet, Link } from "react-router-dom";
import { Header } from './component/Header.jsx'
import { Hero } from './component/Hero.jsx'
import { Productcard, Product } from './component/Productcard.jsx'
import { Footer } from './component/Footer.jsx'
import { Productdetails } from './component/productdetails.jsx'
const Abc = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the home
              page.{" "}
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
};
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
        path: 'product',
        element: <Productdetails />
      }
    ],
  errorElement: <Abc />
  }]);
  
export const App = () => {
  return (
    <>
      <RouterProvider router={H}/>
      </>
  );
};
function Home() {
  return (
    <>
      <Product />
    </>
  );
}

