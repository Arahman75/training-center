import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ConfirmCourse.css';

const ConfirmCourse = () => {
    return (
        <div className="container">
        <div className='field'>
        <div className='checkout-info'>
         <h2>Please CheckOut Your Service.</h2>
        <Form>
   <Form.Group className="mb-3">
     <Form.Control type="text" placeholder="Enter name" required/>
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Control type="email" placeholder="Enter email" required/>
   </Form.Group>

   <Form.Group className="mb-3">
     <Form.Control type="text" placeholder="address" required/>
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Control type="text" placeholder="Phone" required/>
   </Form.Group>
   <Button variant="primary" type="submit">
    Submit
   </Button>
 
 </Form>
 
     </div>

        </div>
       
     </div>
    );
};

export default ConfirmCourse;