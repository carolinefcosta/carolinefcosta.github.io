import Image from 'next/image';
import React from 'react';
import styleContact from '../css/Contact.module.css';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function Contact() {
  return(
    <div className={styleContact.main}>
      <a href="https://github.com/carolinefcosta" >
        <Image src={github} alt='icon-linkedIn' width={58}/>
      </a>
      <a href="https://www.linkedin.com/in/carolinefernandescosta/" className={styleContact.linkedin}>
        <Image src={linkedin} alt='icon-linkedIn' width={60}/>
      </a>
    </div>
  )
}

export default Contact;