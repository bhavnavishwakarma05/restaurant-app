import React from 'react';

const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='share'>
            <a href='#' className='fa fa-facebook-f'></a>
            <a href='#' className='fa fa-twitter'></a>
            <a href='#' className='fa fa-instagram'></a>
            <a href='#' className='fa fa-linkedin'></a>
            <a href='#' className='fa fa-pinterest'></a>
        </div>
        <div className='links'>
            <a href='#'>home</a>
            <a href='#'>about us</a>
            <a href='#'>menu</a>
            <a href='#'>products</a>
            <a href='#'>review</a>
            <a href='#'>contact</a>
            <a href='#'>blogs</a>
        </div>
        <div className='credit'>
            created by <span> Bhavna Vishwakarman</span> | all right reserved
        </div>
      </section>
    
    </>
  )
};

export default Footer;