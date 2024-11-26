import React from 'react';
import Header from '../components/Header';
import laptop from '../images/laptop.gif';
import Image from 'next/image';
import styleHome from '../components/Home.module.css';
import caroline from '../images/caroline';
// import Swal from 'sweetalert2';
import Bot from '@/components/Bot';
import Contact from '@/components/Contact';

export default function Home() {
    return (
      <main className={styleHome.main}>
        <div className={styleHome.homeDiv}>
          <Header />   
          <div >
            <p className={styleHome.txt}>Olá! Seja bem-vindo(a) ao meu Portfólio!</p>
            <p className={styleHome.txt}>Sou Caroline Fernandes,</p>
            <p className={styleHome.txt}>Desenvolvedora Web Full Stack.</p>
          </div>
          <Image src={laptop} alt='gif-animado' className={styleHome.img}/>
          <Image src={caroline} alt='gif-animado' className={styleHome.img}/>
        </div>
        <Bot />
        <Contact />
      </main>
    ) 
}
