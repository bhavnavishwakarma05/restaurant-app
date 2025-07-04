import React from 'react';
import { blog } from '../Data';

const Blog = () => {
  return <>
        <section className='blogs' id='blogs'>
          <h1 className='heading'>
           our <span>blogs</span> 
          </h1>
          <div className='box-container'>
            {blog.map((item, index) => (
                <div className='box' key={index} >
                    <div className='image'>
                        <img src={item.img} alt='' />
                    </div>
                    <div className='content'>
                        <a href='#' className='title'>
                            tasty and refreshing spices 
                        </a>
                        <span>by admin / 21st may, 2025</span>
                        <p>
                            A "restaurant dish" can refer to either the physical 
                            plate or bowl used to serve food or the prepared item 
                            of food itself. 
                        </p>
                        <a href='#' className='btn'>
                            read more
                        </a>
                    </div>
                </div>

            ))}
          </div>
        </section>
  
  
  </>
  
};

export default Blog;