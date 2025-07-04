import React from 'react';
import {menu} from "../Data";

const Menu = () => {
  return ( 
    <section className='menu' id='menu'>
        <h1 className='heading'>
           Our <span>menu</span>
        </h1>
        <div className='box-container'>
            {
                menu.map((item,index)=> (
                    <div className='box'>
                        <img src={item.img} alt=''></img>
                        <h3>tasty and healthy</h3>
                        <div className='price'>
                            Rs.199 <span> 299</span>
                        </div>
                        <a href='#' className='btn'>
                            add to cart
                        </a>
                    </div>
            ))
            }
        </div>
    </section>
  );
  
};

export default Menu;