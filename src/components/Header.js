import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import LogoImg from '../img/header/logo.png'
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterTextHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[90px] flex items-center bg-white opacity-90' >
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterTextHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'}
        className='lg:max-w-[300px] max-w-[250px]'
        >
          <img src={LogoImg} alt='' />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'
          onMouseEnter={mouseEnterTextHandler}
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
        </nav>
      </div>
      {/* socials */}
      <Socials marginLeft={'ml-24'}/>
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
