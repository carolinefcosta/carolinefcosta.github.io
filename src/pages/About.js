import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import MinhaFoto from '../images/MinhaFoto.jpeg';
import styleAbout from '../components/About.module.css';
//import Carousel from '@/components/Carousel';
 
function About(){
    return (
        <div className={styleAbout.main}>
            <Header />
            <div className={styleAbout.div}>
                <h1 className={styleAbout.txt}>Sou Caroline Fernandes da Costa, tenho 30 anos.<br />
                Moro em São Gonçalo do Amarante/ RN.<br />
                Hoje me encontro apaixonada pela área de progamação,<br />
                atualmente faço Graduação em Sistemas de Informação,<br />
                com formação em Desenvolvimento Web, pela Trybe<br />
                e Técnica em Comércio pelo Instituto Federal do RN.<br />
                Sou uma pessoa apaixonada pelos desafios da vida.<br />
                E vivo em busca das minhas realizações pessoais/ profissionais<br />
                Aqui ao lado são algumas fotos minhas aleatórias, rsrs<br />
                Desde já agradeço sua visita.<br />
                Fique à vontade para entrar em contato comigo!
                </h1>
            </div>  
        </div>
    )   
}
 
export default About;
