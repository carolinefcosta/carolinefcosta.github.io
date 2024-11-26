import Header from '@/components/Header';
import React from 'react';
import styleProjects from '../css/Projects.module.css';
import Image from 'next/image';
import projectSolarSystem from '../images/solar-system.gif';
import projectTrybetunes from '../images/trybetunes.gif';
import projectOnlineStore from '../images/online-store.gif';
import projectTrybewallet from '../images/trybewallet.gif';
import projectTrivia from '../images/trivia.gif';
import projectStarwars from '../images/starwars.gif';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
 
function Projects(){
    return (
        <div className={styleProjects.main}>
            <Header />
            <h1 className={styleProjects.h1}>Alguns Projetos</h1>
            <section className={styleProjects.section}>
                <div className={styleProjects.gif}>
                    <Image src={projectSolarSystem} alt='projeto solar system'/>
                    <Link href='https://solar-system-blush.vercel.app/' className={styleProjects.link}>Visualizar</Link>
                </div>
                <div className={styleProjects.gif}>
                    <Image src={projectTrybetunes} alt='projeto trybetunes'/>
                    <Link href='https://trybetunes-taupe.vercel.app/' className={styleProjects.link}>Visualizar</Link>
                </div>
                <div className={styleProjects.gif}>
                    <Image src={projectOnlineStore} alt='projeto online store'/>
                    <Link href='https://online-store-wine-sigma.vercel.app/' className={styleProjects.link}>Visualizar</Link>
                </div>       
            </section>
            <section className={styleProjects.section}>
                <div className={styleProjects.gif}>
                    <Image src={projectTrybewallet} alt='projeto trybewallet'/>
                    <Link href='https://trybewallet-jet.vercel.app/' className={styleProjects.link}>Visualizar</Link>
                </div>
                <div className={styleProjects.gif}>
                    <Image src={projectTrivia} alt='projeto trivia'/>
                    <Link href='https://trivia-five-zeta.vercel.app/' className={styleProjects.link}>Visualizar</Link>
                </div>
                <div className={styleProjects.gif}>
                    <Image src={projectStarwars} alt='projeto starwars'/>
                    <Link href='https://starwars-planets-two.vercel.app/' className={styleProjects.link}>Visualizar</Link>
                </div>  
            </section>
        </div>
    )   
}
 
export default Projects;
