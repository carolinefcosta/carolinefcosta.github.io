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
            Aqui ao lado são momentos/pessoas importantes na minha vida,<br />
            Na primeira foto sou eu com a farda do curso me preparando<br />
            para um momento de soft-skills, que para mim são momentos<br />
            riquíssimos e essencias para obtermos sucesso no trabalho<br />
            em equipe, seja em uma organização, no curso, na família, etc.<br />
            Na segunda foto estou com meu companheiro Henrique, que já está nessa<br />
            caminhada ao meu lado à 5 anos, aquele que aponha todos os meus sonhos,<br />
            ele que me ajudou a viver esse sonho de estudar programação e estar aqui<br />
            em busca da minha maior realização profissional na área, de ser Desenvolvedora Full Stack atuante.<br />
            E nas duas últimas fotos sou eu com meu filho pet, o Thor,<br />
            Ele que trás alegria para nossa casa, que ama um carinho e que<br />
            adooora comer bastante, hahah, brincadeiras a parte esse é um pouco sobre a minha vida.<br />
            Fique à vontade para entrar em contato comigo! 
            </h1>
            <Image src={MinhaFoto} alt='Foto eu, Henrique e Thor' className={styleAbout.img}/>      
        </div>
    )   
}
 
export default About;
