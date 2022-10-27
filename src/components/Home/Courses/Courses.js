import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

const handleAddToCart = (course)=>{
    const newCart = [...cart, course];
    setCart(newCart);
    console.log('clicked me', course)
}

    return (
       <div className='container'>
        <div> <h3>This is courses {courses.length}</h3></div>
         <div className='courses-container'>
           
           <div className="courses">
           
           {
               courses.map(course => <Course 
               key={course.id}
               course={course}
               handleAddToCart={handleAddToCart}
               ></Course>)
           }
           </div>
           <div className="cart">
<Cart cart={cart}></Cart>
           </div>
           
       </div>
       </div>
    );
};

export default Courses;