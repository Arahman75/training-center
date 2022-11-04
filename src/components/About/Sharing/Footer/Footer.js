 import { faEnvelope, faLocationPin, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <div>
            
  <section class="footer py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-9 m-auto text-center">
          <h1>SUBSCRIBE OUR WEBSITE</h1>
          <input type="text" class="px-3" placeholder="Enter Your Email"/>
          <button class="btn2">Submit</button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-11">
          <div class="row">
            <div class="col-lg-3 py-3">
              <h5 class="pb-3">OUR COLLECTIONS</h5>
              <p>Contact Us</p>
              <p>About Us</p>
              <p>Login</p>
            </div>
            <div class="col-lg-3 py-3">
              <h5 class="pb-3">CUSTOMER SERVICES</h5>
              <p>Educational</p>
              <p>English</p>
              <p>Spoken English</p>
            </div>
            <div class="col-lg-2 py-3">
              <h5 class="pb-3">OUR SERVICES</h5>
              <p>About</p>
              <p>Accessories</p>
              <p>Book</p>
            </div>
            <div class="col-lg-4 py-3">
              <h5 class="pb-3">CONTACT ME</h5>
              <p> <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon> Location : Bangladesh, Chattogram</p>
              <p> <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon> +088 01825 370675</p>
              <p> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> mdabdurrahman3211@gmail.com</p>
<p className='social-icon'> <i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-instagram"></i></p>
           
             
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <footer class="text-center">Copyright <i class="fa-regular fa-copyright"></i>All Rights Reserved by {year} Abdur Rahman</footer>
    </div>
  </section>
 </div>
 );
};

export default Footer;



 //     <div><FontAwesomeIcon icon="fa-solid fa-location-dot" />
    //     <div className='footer'>
    //         <div className="footer-input">
    //             <h3>SUBSCRIBE OUR WEBSITE</h3>
    //             <div>
    //                 <input className='search-field' type="email" name="" id="" placeholder='Enter your email' />
    //                 <input className='submit-button' type="submit" value="SUBSCRIBE" />
    //             </div>
    //             <h3>BACK TO TOP</h3>
    //         </div>
    //         <hr />
    //         <div className='row footer-info'>
    //             <div className="col-3">
    //                 <h6>OUR COLLECTIONS</h6>
    //                 <div className="row">
    //                     <div className="col-6">
    //                         <p>Contact Us</p>
    //                         <p>About Us</p>
    //                         <p>Login</p>
    //                         <p>Register</p>
    //                         <p>Wish list</p>
    //                     </div>
    //                     <div className="col-6">
    //                         <p>Discount</p>
    //                         <p>Vehicle</p>
    //                         <p>Spring</p>
    //                         <p>Collection</p>
    //                         <p>Trending</p>
    //                         <p>Best Training</p>
    //                         <p>International</p>


    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-3">
    //                 <h6>CUSTOMER SERVICES</h6>
    //                 <div className="row">
    //                     <div className="col-6">
    //                         <p>Educational</p>
    //                         <p>English</p>
    //                         <p>Economics</p>
    //                         <p>Spoken English</p>
                            
    //                     </div>
    //                     <div className="col-6">
    //                         <p>Home Tutor</p>
    //                         <p>Male and Female</p>
    //                         <p>Math</p>
    //                         <p>ICT</p>
    //                         <p>Online</p>
    //                     </div>
    //                 </div>

    //             </div>
    //             <div className="col-3">
    //                 <h6>INFORMATION</h6>
    //                 <div className="row">
    //                     <div className="col-6">
    //                         <p>Book</p>
    //                         <p>Pen</p>
    //                         <p>Accessories</p>
    //                         <p>Shoes</p>
    //                         <p>Dress</p>
    //                     </div>
    //                     <div className="col-6">
    //                         <p>Good</p>
    //                         <p>Daily</p>
    //                         <p>Present</p>
    //                         <p>Shoes</p>
    //                         <p>Best Student</p>
    //                     </div>
    //                 </div>

    //             </div>
    //             <div className="col-3">
    //                 <h6>CONTACT ME</h6>
    //                 <div className="row">
    //                     <div className="col-12">
    //                         <p className='icon'> <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>  Location: Bangladesh, Chattogram</p>
    //                         <p><FontAwesomeIcon icon={faPhoneVolume} />  +088 01825 370675</p>

    //                         <p> <FontAwesomeIcon icon={faEnvelope} /> mdabdurrahman3211@gmail.com</p>
    //                         <p className='social-icon'> <i class="fa-brands fa-facebook"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-instagram"></i></p>
    //                     </div>
    //                 </div>

    //             </div>

    //         </div>
    //         <div className="footer-copy">

    //             <p>All Content Reserved <i class="fa-regular fa-copyright"></i> by {year} Abdur Rahman.</p>

    //         </div>
    //     </div>
    // </div>
