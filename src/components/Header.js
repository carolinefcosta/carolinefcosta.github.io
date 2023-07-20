import React from 'react';
import styleHeader from './Header.module.css';
import Link from 'next/link';
 
function Header(){
    return (
      <main className={styleHeader.main}>
        <div>
            <h1 className={styleHeader.h1}>Caroline Fernandes</h1>
            <h3 className={styleHeader.h3}>Desenvolvedora Web</h3>        
        </div>
        <Link href='/' className={styleHeader.link}>Home</Link>
        <Link href='/About' className={styleHeader.link}>Sobre</Link>
        <Link href='/Projects' className={styleHeader.link} >Projetos</Link>
        <Link href='/Skills' className={styleHeader.link} >Skills</Link>
      </main>
    )   
}
 
export default Header;