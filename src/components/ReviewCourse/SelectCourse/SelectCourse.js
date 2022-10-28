import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../Home/Cart/Cart';
import ReviewCourse from '../ReviewCourse/ReviewCourse/ReviewCourse';
import './SelectCourse.css'



const SelectCourse = () => {
    const [courses, setCourses] = useState([]);
    const [cart, setCart] =useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])


    return (
       

   
       <div className='container courses-container'>
         <div className='select-course-container'>
           
          {
               courses.map(course => <ReviewCourse
               key={course.id}
               course={course}
               ></ReviewCourse>)
           }
           </div>
           <div className="cart">
<Cart cart={cart}>
<Link to="/blog"><button className='cart-btn'>Confirm Course</button></Link>
</Cart>

           </div>
           
       </div>
      
    );
};

export default SelectCourse;