import React from 'react';
import AboutImg from "../assets/images/about-us.jpg"

const About = () => {
  return <>
  <section className='about' id='about'>
    <h1 className='heading'>
        <span>about</span> us 
    </h1>
    <div className='row'>
        <div className='image'>
            <img src={AboutImg} alt='' />
        </div>
        <div className='content1'>
            <h3>What Makes Our Food Special?</h3>
            <p>
               What makes food special is a multifaceted experience that involves the senses, 
               cultural significance, and the joy of sharing. Food is not just a source of 
               sustenance but also a source of pleasure, memory, and connection.  
            </p>
            <p>
                The experience of eating is a multisensory journey, engaging taste, smell, 
                sight, texture, and even sound. The way food is prepared, presented, and 
                shared can all contribute to a memorable eating experience. 
            </p>
            <a href='#' className='btn'>
                Learn More
            </a>
        </div>
    </div>
  </section> 
  </>;
  
};

export default About;