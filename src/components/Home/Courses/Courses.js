import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
    },[]);
// use for local storage
useEffect(()=>{
    console.log('add a course', courses)
    const storedCart = getStoredCart();
   const savedCart =[];
    for(const id in storedCart){
        const addedCourse = courses.find(course => course.id === id);
        if(addedCourse){
            const quantity = storedCart[id];
            addedCourse.quantity = quantity;
            savedCart.push(addedCourse);
        // console.log(addedCourse);
           
        }
}
    setCart(savedCart);
},[courses])


const handleAddToCart = (SelectedCourse)=>{
    // console.log('clicked me', course)
    // const newCart = [...cart, course];
    // setCart(newCart);

    // use for local storage
    let newCart = [];
    const exists = cart.find(course => course.id === SelectedCourse.id)
    if(!exists){
        SelectedCourse.quantity = 1;
        newCart = [...cart, SelectedCourse];
    }
    else{
        const rest = cart.filter(course => course.id !== SelectedCourse.id)
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
    }
   
    setCart(newCart);
    addToDb(SelectedCourse.id);
    
}

    return (
       <div className='container'>
         <h3 className='course-title'>We Are Providing Courses</h3>
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
<Cart cart={cart}>
<Link to="/selectCourse"><button className='review-btn'>Review Course</button></Link>
</Cart>

           </div>
           
       </div>
       </div>
    );
};

export default Courses;