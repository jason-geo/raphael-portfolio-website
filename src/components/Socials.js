import React, { useContext } from 'react';
// import icons
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterTextHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterTextHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex'
    >
      <ul className='flex gap-x-4 ml-24'>
        <li>
          <a href='http://wwww.facebook.com' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com' target='_blank'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_blank'>
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
