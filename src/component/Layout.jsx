import { Header } from './Header.jsx'
import { Hero } from './Hero.jsx'
import { Footer } from './Footer.jsx'
import { Outlet } from 'react-router-dom'
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