import React, { useState } from 'react';

function Topnav() {
  const [show, setshow,] = useState(false);
  const [opens, setopen,] = useState(false);
  
  return (
    <div>
      {/* <!-- Breadcrumb --> */}
      <nav
        class='flex px-5 py-3 text-gray-700 justify-between rounded-lg bg-[#FBFBFB] dark:bg-gray-800 dark:border-gray-700'
        aria-label='Breadcrumb'
      >
        <div class='inline-flex items-center space-x-1 md:space-x-3'>
          <button
            type='button'
            onClick={() => {
              setshow(!show);
            }}
            class='flex bg-white border border-black items-center w-[100px] p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
            aria-controls='dropdown-example'
            data-collapse-toggle='dropdown-example'
          >
            {/* <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg> */}
            <span class='flex-1 ml-3 text-left whitespace-nowrap'>Year</span>
            <svg
              class='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>
          {/* ----------- Dropdown --------------------- */}

          <div
            id='dropdown'
            className={`${show? 'active' : 'hidden'} z-10 absolute left-[14rem] top-[8.5rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-[8rem] dark:bg-gray-700 ` }
          >
            <ul
              class='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownDefaultButton'
            >
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  1st year
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  2nd year
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  3rd year
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  4th year
                </a>
              </li>
            </ul>
          </div>

          <ol class='inline-flex items-center space-x-1 md:space-x-3'>
            <li class='inline-flex items-center'></li>
            <li class='inline-flex items-center'>
              <a
                href='#'
                class='inline-flex  font-sans items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              >
                {/* <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg> */}
                Data structures
              </a>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Web
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Networking
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Robotics
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Data science
                </a>
              </div>
            </li>
            <li>
              <div class='flex items-center'>
                {/* <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg> */}
                <a
                  href='#'
                  class='ml-1 text-sm font-sans font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Mobile app
                </a>
              </div>
            </li>
          </ol>
        </div>

        <button
          type='button'
          onClick={() => {
            setopen(!opens);
          }}
          class='flex bg-white border border-black items-center w-[100px] p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
          aria-controls='dropdown-example'
          data-collapse-toggle='dropdown-example'
        >
          <svg class='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 18 21' enable-background="new 0 0 128 128"id="filter"><path fill="#373737" d="M126.6,13.6v7.8L77.3,70.7v27.2l-26.5,19.2V70.7L1.4,21.4v-7.8c0-1.5,1.2-2.7,2.7-2.7h119.7
	C125.3,10.9,126.6,12.1,126.6,13.6z"></path></svg>
          
          <span class='flex-1 ml-3 text-left whitespace-nowrap font-sans'>
            Filter
          </span>
          
          <svg
            class='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m1 1 4 4 4-4'
            />
          </svg>
        </button>
        <div
            id='dropdown'
            className={`${opens? 'active' : 'hidden'} z-10 absolute left-[70rem] top-[8.5rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-[8rem] dark:bg-gray-700 ` }
          >
            <ul
              class='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownDefaultButton'
            >
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Recent
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Top
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Time 
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Day
                </a>
              </li>
            </ul>
          </div>

      </nav>
    </div>
  );
}

export default Topnav;
