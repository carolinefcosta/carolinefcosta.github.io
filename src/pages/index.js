// import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import laptop from '../images/laptop.gif';
import Image from 'next/image';
import styleHome from '../components/Home.module.css';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [name, setName] = useState('');
  
  function guestName() {
  let question = prompt('Qual seu nome?')
  if (question !== null) {
    setName(question);
  }
  }

  useEffect(() => {
    guestName();
  }, [])

    return (
        <div className={styleHome.main}>
          <Header />    
          <div>
            <div className={styleHome.txt}>Olá, {name}! Seja bem-vindo(a) ao meu Portfólio!</div>
          </div>
          <Image src={laptop} alt='gif-animado' className={styleHome.img}/>
        </div>
    ) 
}
