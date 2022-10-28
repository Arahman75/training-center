import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword, user] 
        = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
     } 
     const handlePasswordBlur = event =>{
         setPassword(event.target.value)
     } 
const handleConfirmPasswordBlur= event=>{
    setConfirmPassword(event.target.value);
}
if(user){
    navigate('/home');
}

     const handleCreateUser =(event)=>{
 event.preventDefault();
 console.log(email,password)
 if(password !== confirmPassword){
    setError('Your two password did not match');
    return;
 }
 if(password.length <6){
    setError('password must be six character');
    return;
 }
 createUserWithEmailAndPassword(email, password);
     }

    return (
        <div className="login-form">
        <div>
            <h2 className='form-title'>Please Register</h2>
            <Form onSubmit={handleCreateUser}>
  <Form.Group className="mb-3" >
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="ConfirmPassword" required/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <p style={{color:'red'}}>{error.message}</p>
  <p>All Ready Register? <Link to="/login">Please Login</Link></p>
  <Button variant="primary" type="submit">
   Register
  </Button>
</Form>
        
        </div>

    </div>
    );
};

export default Register;