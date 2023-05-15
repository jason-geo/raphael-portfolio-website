import React, { useContext } from 'react';
// import icons
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const MobileSocials = () => {
  const { mouseEnterTextHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterTextHandler}
      onMouseLeave={mouseLeaveHandler}
      className='xl:flex'
    >
      <ul className='flex gap-x-4 mt-24'>
        <li>
          <a href='http://wwww.facebook.com' target='_self'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com' target='_self'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com' target='_self'>
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileSocials;
