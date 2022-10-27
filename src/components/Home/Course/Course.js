import React from 'react';
import './Course.css';

const Course = ({course, handleAddToCart}) => {
    const {img, name, price} = course;
    return (
        <div className='course'>
            <img src={img} alt=""/>
           <div className='course-info'>
           <h4>{name}</h4>
            <h5>Course Fee : ${price}</h5>
            <button className='add-btn' onClick={()=>handleAddToCart(course)}>Add Course</button>
            
           </div>
        </div>
    );
};

export default Course;