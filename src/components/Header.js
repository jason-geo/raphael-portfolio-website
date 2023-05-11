import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import LogoImg from '../img/header/logo.png'
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[90px] flex items-center bg-white opacity-90' >
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'}
          className='max-w-[300px]'
        >
          <img src={LogoImg} alt='' />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link
            to={'/'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Porftolio
          </Link>
          <Link
            to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            About
          </Link>
          <Link
            to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Contact
          </Link>
          <a
            href="https://google.com"
            className='text-[#696c6d] hover:text-primary transition'
          >
            Blog
          </a>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
