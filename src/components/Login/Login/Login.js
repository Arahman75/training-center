import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const location = useLocation();

    let from = location?.state?.from?.pathname || '/';

    //login email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // google signIn
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        // navigate('/home')
        navigate(from, {replace : true});
    }


    const handleFormSummit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        console.log(email, password);

    }
    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
    }

    return (
        <div className='login-form'>
            <div>
                <h1 className='login-title'>Please Login</h1>
                <Form onSubmit={handleFormSummit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <h4>Are you new user? <Link to="/register">Please Register</Link></h4>
                    {
                        loading && <p>Loading....</p>
                    }
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <Button onClick={handleGoogleSignIn} className='my-5' variant='info'>Google Sign In</Button>
        </div>
    );
};

export default Login;