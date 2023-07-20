import React, { Component } from 'react';

export class Card extends Component {
  render() {
    return (
      <div>
        <div class='flex flex-col p-4 items-start h-48 mb-4 rounded drop-shadow-md bg-white dark:bg-gray-800'>
          <div>
            <h5 class='mb-2 text-2xl font-sans font-bold tracking-tight text-gray-900 dark:text-white'>
              Data Structures - Chapter 1 Lecture notes
            </h5>
          </div>
          <div>
            <p class='font-normal  font-sans text-gray-700 dark:text-gray-400'>
              This is the handout shared to us by our instructor Mr.X. It is the
              first of 5 chapters for this course...
            </p>
          </div>

          <div>
            <div className='flex mt-3 flex-row gap-2'>
              <button
                type='button'
                class='w-[85px] h-[34px] bg-[#D9D9D9] text-gray-500 font-sans items-center justify-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                Handout
              </button>
              <button
                type='button'
                class='w-[85px] h-[34px] bg-[#D9D9D9] text-gray-500 font-sans items-center justify-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                DSA
              </button>
              <button
                type='button'
                class='w-[85px] h-[34px] bg-[#D9D9D9] text-gray-500 font-sans items-center justify-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                C++
              </button>
              <button
                type='button'
                class='w-[85px] h-[34px] bg-[#D9D9D9] text-gray-500 font-sans items-center justify-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                Micro
              </button>
            </div>

            <div className='flex flex-row gap-3 mt-3 items-center justify-center'>
              <button className=' hover:bg-black'>
                <img
                  class='w-10 h-10 rounded-full object-cover'
                  src='/profile2.jpg'
                  alt='Rounded avatar'
                />
              </button>
              <p className='font-sans font-normal'>65 views</p>
              <span>
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  class='bi bi-dot'
                  viewBox='0 0 16 16'
                >
                  {' '}
                  <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />{' '}
                </svg>
              </span>
              <p className='font-sans font-normal'>12 Comments</p>
              <span>
                <svg
                  width='20'
                  height='20'
                  fill='currentColor'
                  class='bi bi-dot'
                  viewBox='0 0 16 16'
                >
                  {' '}
                  <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />{' '}
                </svg>
              </span>
              <p className='font-sans font-normal'>50 Likes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
