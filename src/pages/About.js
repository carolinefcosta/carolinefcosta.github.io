import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import MinhaFoto from '../images/MinhaFoto.jpeg';
import styleAbout from '../components/About.module.css';
 
function About(){
    return (
        <div className={styleAbout.main}>
            <Header />
            <h1 className={styleAbout.txt}>Sou Caroline Fernandes da Costa, tenho 28 anos.<br />
            Moro em São Gonçalo do Amarante/ RN.<br />
            Hoje me encontro apaixonada pela área de progamação,<br />
            atualmente estou em transição de carreira e estudo Desenvolvimento<br />
            Web na Trybe, sempre me desafiando a buscar novos conhecimentos.<br />
            Aqui na foto ao lado sou eu com a farda do curso me preparando<br />
            para um momento de soft-skills, que para mim são momentos<br />
            riquíssimos e essencias para obtermos sucesso no trabalho<br />
            em equipe, seja em uma organização, no curso, na família, etc.<br />
            Hoje estou vivendo esse sonho de estudar programação e estou aqui em<br />
            busca da minha maior realização profissional na área, de ser<br />
            Desenvolvedora Full Stack atuante.<br />
            Agradeço sua visita.<br />
            Fique à vontade para entrar em contato comigo! 
            </h1>
            <Image src={MinhaFoto} alt='Foto eu, Henrique e Thor' className={styleAbout.img}/>      
        </div>
    )   
}
 
export default About;
