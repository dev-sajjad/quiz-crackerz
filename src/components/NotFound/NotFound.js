import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="flex justify-center items-center h-full w-full top-48">
        <div >
          <h2 className='text-4xl font-bold '>
            <strong>404 </strong>| Page Not Found.
          </h2>
          <p className='text-2xl font-normal mt-4'>Go to <Link className='underline' to='/home' >Home</Link> page instead.</p>
        </div>
      </div>
    );
};

export default NotFound;