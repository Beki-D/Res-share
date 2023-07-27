import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description }) => {
  return (
    <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Link to='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
      </Link>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {description}
      </p>
      <Link
        to='/'
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Back
        <svg
          className='w-3.5 h-3.5 ml-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
      </Link>
    </div>
  );
};

export default Card;
