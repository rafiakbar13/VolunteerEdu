import React from 'react';
import {
  MDBFooter,
  // MDBContainer,
  // MDBCol,
  // MDBRow,
  // MDBIcon
} from 'mdb-react-ui-kit';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaGithub
} from 'react-icons/fa';


const Footer = () => {
  return (
    <MDBFooter className='bg-primary text-center text-white' style={{marginTop : "400px"}} >
      <div className='container pt-4'>
        <section className='mb-4'>
          <a href='#!' 
          className='btn btn-link  text-white m-1'
          >
            <FaFacebookF />
          </a>
          <a href='#!' 
          className='btn btn-link text-white m-1'
          >
            <FaTwitter />
          </a>
          <a href='#!' 
          className='btn btn-link text-white m-1'
          >
            <FaWhatsapp />
          </a>
          <a href='#!' 
          className='btn btn-link text-white m-1'
          >
            <FaInstagram />
          </a>
          <a href='#!' 
          className='btn btn-link text-white m-1'
          >
            <FaTelegramPlane />
          </a>
          <a href='#!' 
          className='btn btn-link text-whitem-1'
          >
            <FaGithub />
          </a>
        </section>

      </div>

      <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright © 2022  All rights reserved.
      </div>
    </MDBFooter>
  );
}

export default Footer;

