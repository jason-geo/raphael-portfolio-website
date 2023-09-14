import React, { useContext, useRef } from 'react';
// import images
import RaphaelImg from '../img/contact/Raphael.png';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
//import emailjs
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { mouseEnterTextHandler, mouseEnterImageHandler, mouseLeaveHandler } = useContext(CursorContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs.sendForm('service_hd7snjo', 'template_w1ohdzm', form.current, 'v96ZWeE5Q71Tdj9S8')
      .then((result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            alert('Your message has been sent successfully. Thank you!');
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
          ></motion.div>
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterTextHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-4'
          >
            <h1 className='h1'>Hire Me</h1>
            <p className='mb-12'>I would love to hear from you.</p>
            {/* form */}
            <form className='flex flex-col gap-y-4' ref={form} onSubmit={sendEmail}>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your name'
                  name="user_name"
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your email address'
                  name="user_email"
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='textarea'
                placeholder='Your message'
                name="message"
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                Send it
              </button>
            </form>
          </div>

          <motion.div
            onMouseEnter={mouseEnterImageHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={RaphaelImg} alt=''/>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
