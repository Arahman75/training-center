import React from 'react';
import arahman from '../../image/rahman.jpg';
import './About.css';


const About = () => {
    return (
        <div className='container'>
        <div className="row about-me mt-5">
            <div className="col-8 about-info">
                <h1>Self Information</h1>
<h2>I am Abdur Rahman</h2>
<h4>Father Name: Abul kashem</h4>
<h4>Mother Name: Salma khatun</h4>
<h5>I am a student of Patia Government College. I am studying second year of BA Hons. My subject is Islamic history & culture.</h5>
<h5>I learning Programming 1-9-2021 from 17-10-2022. Now I am a junior Frontend Developer. I want to  a professional web Developer in 31-12-2023.So You are pray for me.May Allah help me. As if I can be a Programmer.</h5>
            </div>
            <div className="col-4 about-img">
                <img src={arahman} alt="" />
            </div>
        </div>
    </div>
    );
};

export default About;