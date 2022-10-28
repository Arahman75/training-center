import React from 'react';
import './ReviewCourse.css';

const ReviewCourse = ({course}) => {
    const {name, img, price, tax} = course;
    return (
        <div className='review-container'>
           <div className="review-course">
<img src={img} alt="" />
           </div>
          <div className="review-info-container">
          <div className="review-info">
           <h4>{name}</h4>
            <h5>Price : ${price}</h5>
            <h5>Tax : ${tax}</h5>
           </div>
           <div className="delete-container">
            <button className='delete-btn'>Delete</button>
           </div>
          </div>
        </div>
    );
};

export default ReviewCourse;