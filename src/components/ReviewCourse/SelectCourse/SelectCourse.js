import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import useCourses from '../../../hooks/useCourses';
import Cart from '../../Home/Cart/Cart';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewCourse from '../ReviewCourse/ReviewCourse/ReviewCourse';
import './SelectCourse.css'



const SelectCourse = () => {
    // const [courses, setCourses] = useState([]);
    const [courses, setCourses] = useCourses();
    // const [cart, setCart] =useState([]);
    const [cart, setCart] = useCart(courses);

    // useEffect(()=>{
    //     fetch('courses.json')
    //     .then(res => res.json())
    //     .then(data => setCourses(data))
    // },[])

    const handleRemoveCourse =(course)=>{
        const rest = cart.filter(pd => pd.id !== course.id);
        setCart(rest);
        removeFromDb(course.id);
// console.log(product);
    }


    return (
       

   
       <div className='container courses-container'>
         <div className='select-course-container'>
           
          {
               cart.map(course => <ReviewCourse
               key={course.id}
               course={course}
               handleRemoveCourse={handleRemoveCourse}
               ></ReviewCourse>)
           }
           </div>
           <div className="cart">
<Cart cart={cart}>
<Link to="/confirm"><button className='review-btn'>Confirm Course</button></Link>
</Cart>

           </div>
           
       </div>
      
    );
};

export default SelectCourse;