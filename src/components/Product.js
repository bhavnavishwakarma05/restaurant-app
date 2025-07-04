import React from 'react';
import { product } from '../Data';

const Product = () => {
  return (
    <section className='products' id='products'>
        <h1 className='heading'>
            our <span>products</span>
        </h1>
        <div className='box-container'>
            {product.map((item, index) => (
                <div className='box'>
                    <div className='icons'>
                        <a href='#' className='fa fa-shopping-cart'></a>
                        <a href='#' className='fa fa-heart'></a>
                        <a href='#' className='fa fa-eye'></a>
                    </div>
                    <div className='image'>
                       <img src={item.img} alt='' />
                    </div>
                    <div className='content'>
                        <h3>fresh food</h3>
                        <div className='stars'>
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fas fa-star-half-alt' />
                        </div>
                        <div className='price'>
                            Rs.299 <span>Rs.399</span>
                        </div>
                    </div>
                </div>
           ))}
        </div>
    </section>
  );
};

export default Product;