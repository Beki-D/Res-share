import React, { useState } from 'react';
import SearchBar from './searchbar';
import Sidebar from './sidebar';
import Addres from '../Pages/address';
import { Link } from 'react-router-dom';

function Navbar() {
  const [show, setshow] = useState(false);

  return (
    <div>
      <nav class='fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 dark:bg-gray-900'>
        <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex flex-row'>
            {/* <!-- Logo --> */}
            <Link to='/' className='flex items-center'>
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                RES<span className='text-green'>.</span>SHARE
              </span>
            </Link>

            {/* <!-- links --> */}
            <div
              class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-5'
              id='navbar-user'
            >
              <ul class='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <li>
                  {/* Use Link component with 'to' prop to navigate to Home */}
                  <Link
                    to='/'
                    className='block py-2 pl-3 pr-4 font-sans font- font-medium text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                    aria-current='page'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {/* Use Link component with 'to' prop to navigate to About */}
                  <Link
                    to='/about'
                    className='block  py-2 pl-3 pr-4 font-sans text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services'
                    className='block py-2 pl-3 pr-4 font-sans text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class='flex  md:order-2'>
            {/* <!-- Responsive Search bar --> */}
            <div className='hidden md:block mr-4'>
              <SearchBar />
            </div>

            {/* <!-- Add resource button --> */}
            <Link to='/addresources'>
              <button
                type='button'
                class='text-black font-sans items-center text-center bg-[#14C593] border border-1 border-[#000000]  w-[141.94px] h-[40px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mr-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                Add resources
              </button>
            </Link>

            <div class='flex md:order-2'>
              <button
                type='button'
                data-collapse-toggle='navbar-search'
                aria-controls='navbar-search'
                aria-expanded='false'
                class='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
              >
                <svg
                  class='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
                <span class='sr-only'>Search</span>
              </button>
            </div>

            {/* <!------------------ profile pic -------------> */}
            <button
              type='button'
              class='flex mr-3 text-sm items-center rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
              id='user-menu-button'
              aria-expanded='false'
              data-dropdown-toggle='user-dropdown'
              data-dropdown-placement='bottom'
            >
              <span class='sr-only'>Open user menu</span>
              <img
                onClick={() => {
                  setshow(!show);
                }}
                className='w-[35px] h-[35px] object-cover rounded-full'
                src='/profile.jpg'
                alt='user profile.'
              />
            </button>

            {/* <!-- Dropdown menu --> */}

            <div
              className={`${
                show ? 'active' : 'hidden'
              } z-50 absolute top-[3rem] right-3 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id='user-dropdown'
            >
              <div class='px-4 py-3'>
                <span class='block text-sm text-gray-900 dark:text-white'>
                  Bonnie Green
                </span>
                <span class='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                  name@flowbite.com
                </span>
              </div>
              <ul class='py-2' aria-labelledby='user-menu-button'>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                  >
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li> */}
              </ul>
            </div>

            <button
              data-collapse-toggle='navbar-user'
              type='button'
              class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-user'
              aria-expanded='false'
            >
              <span class='sr-only'>Open main menu</span>
              <svg
                class='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
