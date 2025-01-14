import React from 'react';
import {Link} from 'react-scroll';
import Theme from '../assets/themes.png';

const Navbar = () => {
  return (
    <div className='bg-button_color h-20 shadow-pink-900 shadow-md fixed top-0 w-full z-10'>
      <nav className='flex justify-center md:justify-between items-center px-5 md:px-20 lg:px-40 h-full'>

        <ul className='list-none'>
          <li className='text-background_primary font-poppins font-extrabold text-4xl text-center sm:text-3xl'>
            <a href = "#"  className = "hover:text-pink-200 transition ease-out duration-700">JAYA KUMAR</a>
          </li>
        </ul>

        <ul className='hidden md:flex space-x-16 list-none'>
          <li className='text-pink-200 font-nunito font-bold text-xl'>
            <a href = "#" className='hover:text-white transition ease-out duration-500'>HOME</a>
          </li>
          <li className='text-pink-200 font-nunito font-bold text-xl'>
            <a href= "#services" className='hover:text-white transition ease-out duration-500'>
              <Link 
                to = "services"
                smooth = {true}
                duration={200}
                className='hover:text-white cursor-pointer'
              >
              SERVICES
              </Link>
            </a>
          </li>
          <li className='text-pink-200 font-nunito font-bold text-xl'>
            <a href="#works" className='hover:text-white transition ease-out duration-500'>
            <Link 
                to = "works"
                smooth = {true}
                duration={200}
                className='hover:text-white cursor-pointer'
              >
              WORKS
              </Link>
            </a>
          </li>
          <li className='text-pink-200 font-nunito font-bold text-xl'>
            <a href="#contacts" className='hover:text-white transition ease-out duration-500'>
            <Link 
                to = "contacts"
                smooth = {true}
                duration={200}
                className='hover:text-white cursor-pointer'
              >
              CONTACT
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
