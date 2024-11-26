import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import styleHome from '../css/Home.module.css';
import Bot from '@/components/Bot';
import Contact from '@/components/Contact';
import caroline from '../images/caroline.costa.jpeg';

export default function Home() {
    return (
      <main className={styleHome.main}>
        <Header /> 
        <div className={styleHome.homeDiv}>
          <Image src={caroline} alt='foto' className={styleHome.img}/>
          <div>
            <p className={styleHome.txt}>Olá! Seja bem-vindo(a) ao meu Portfólio!</p>
          </div>
        </div>
        <Bot />
        <div className={styleHome.footer}>
          <Contact />
        </div>
        
      </main>
    ) 
}
