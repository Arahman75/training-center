import React from 'react';
import notFound from '../../../../image/notfound.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
        <div>
        <h3>The page is nou found. Please try again!!</h3>
          <div>
              <img src={notFound} alt="" />
          </div>
        </div>
      </div>
    );
};

export default NotFound;