import React from 'react';

const Contact = () => {
  return (
    <>
        <section className='contact' id='contact'>
          <h1 className='heading'>
            <span>Contact</span> us
          </h1>
          <div className='row'>
            <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3377564.66329443!2d77.37254872744928!3d20.73112120211785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMcDonald&#39;s%20location!5e0!3m2!1sen!2sin!4v1749991961085!5m2!1sen!2sin"
                allowFullScreen=""
                loading='lazy'
            ></iframe>
            <form>
                <h3>get in touch</h3>
                <div className='inputBox'>
                    <span className='fa fa-user'></span>
                    <input type='text' placeholder='name' />
                </div>
                <div className='inputBox'>
                    <span className='fa fa-envelope'></span>
                    <input type='email' placeholder='email' />
                </div>
                <div className='inputBox'>
                    <span className='fa fa-phone'></span>
                    <input type='number' placeholder='number' />
                </div>
                <input type='submit' value="Contact Now" className='btn' />
            </form>
          </div>
        </section>
    </>
  );
};

export default Contact;
