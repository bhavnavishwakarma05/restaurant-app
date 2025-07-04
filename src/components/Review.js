import React from 'react';
import { review } from '../Data';
import quoteImg from "../assets/images/quote-img.png";
const Review = () => {
  return (
    <section className='review' id='review'>
        <h1 className='heading'>
            customer's <span>review</span>
        </h1>
        <div className='box-container'>
            {
              review.map((item, index) => (
                <div className='box'>
                    <img src={quoteImg} alt='' className='quote' />
                    <p>
                       A good restaurant review thought process involves evaluating 
                       various aspects of the dining experience, including food quality, 
                       service, ambiance, and value for money. It's helpful to think about 
                       how each of these elements contributed to your overall enjoyment and 
                       to provide specific examples to support your observations.  
                    </p>
                <img src={item.img} alt='' className='user' />
                <h3>Sunny Jeo</h3>
                <div className='stars'>
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star-half-alt' />
                </div>
                </div>
                
              ))}
        </div>
    </section>
  );
};

export default Review;