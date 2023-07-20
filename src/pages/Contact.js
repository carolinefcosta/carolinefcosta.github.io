import Image from 'next/image';
import React from 'react';
import iconGit from '../images/github.png';
import iconLinkedin from '../images/linkedin.png';
import styleContact from '../components/Contact.module.css';
import Header from '@/components/Header';
import Bot from '@/components/Bot';

function Contact() {
  return(
    <div className={styleContact.main}>
      <Header />
      <section className={styleContact.git}>
        <a href="https://github.com/carolinefcosta" >
          <Image src={iconGit} alt='icon-linkedIn' />
        </a>
      </section>
      <section>
        <a href="https://www.linkedin.com/in/carolinefernandescosta/" className={styleContact.linkedin}>
          <Image src={iconLinkedin} alt='icon-linkedIn' />
        </a>
      </section>
      <Bot />
    </div>
  )
}

export default Contact;