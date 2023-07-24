import Image from 'next/image';
import React from 'react';
import iconGit from '../images/icons8-github-64.png';
import iconLinkedin from '../images/icons8-linkedin-64.png';
import styleContact from '../components/Contact.module.css';
import Header from '@/components/Header';
import Bot from '@/components/Bot';

function Contact() {
  return(
    <div className={styleContact.main}>
      <a href="https://github.com/carolinefcosta" >
        <Image src={iconGit} alt='icon-linkedIn' />
      </a>
      <a href="https://www.linkedin.com/in/carolinefernandescosta/" className={styleContact.linkedin}>
        <Image src={iconLinkedin} alt='icon-linkedIn' />
      </a>
    </div>
  )
}

export default Contact;