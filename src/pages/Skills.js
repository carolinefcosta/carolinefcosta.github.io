import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import styleSkill from '../components/Skills.module.css';
import javascript from '../skillsImages/javascript-original.svg';
import typescript from '../skillsImages/typescript-original.svg';
import html from '../skillsImages/html5-original.svg';
import css from '../skillsImages/css3-original.svg';
import react from '../skillsImages/react-original.svg';
import next from '../skillsImages/next-js-logo.png';
import redux from '../skillsImages/redux-original.svg';
import node from '../skillsImages/nodejs-original.svg';
import docker from '../skillsImages/docker-original.svg';
import github from '../skillsImages/github2.png';
import skills from '../skillsImages/skills.gif';
import mysql from '../skillsImages/mysql-original.svg';
import sequelize from '../skillsImages/sequelize-original.svg';
 
function Skills(){
    return (
        <div className={styleSkill.main}>
            <Header />
            <Image src={skills} alt='skills'/>
            <section className={styleSkill.section}>
                <div>
                    <Image src={javascript} alt='javascript' className={styleSkill.img}/>
                    <p>JavaScript</p>
                </div>
                <div>
                    <Image src={typescript} alt='typescript' className={styleSkill.img}/>
                    <p>TypeScript</p>
                </div>
                <div>
                    <Image src={html} alt='html' className={styleSkill.img}/>
                    <p>HTML</p>
                </div>
                <div>
                    <Image src={css} alt='css' className={styleSkill.img}/>
                    <p>CSS</p>
                </div>
                <div>
                    <Image src={react} alt='react' className={styleSkill.img}/>
                    <p>React</p>
                </div>
                <div>
                    <Image src={redux} alt='redux' className={styleSkill.img}/>
                    <p>Redux</p>
                </div>
                <div>
                    <Image src={next} alt='next' className={styleSkill.img}/>
                    <p>NextJS</p>
                </div>
                <div>
                    <Image src={node} alt='node'className={styleSkill.img}/>
                    <p>NodeJs</p>
                </div>
                <div>
                    <Image src={docker} alt='docker' className={styleSkill.img}/>
                    <p>Docker</p>
                </div>
                <div>
                    <Image src={mysql} alt='mysql' className={styleSkill.img}/>
                    <p className={styleSkill.paragrafh}>MySQL</p>
                </div>
                <div>
                    <Image src={sequelize} alt='sequelize' className={styleSkill.img}/>
                    <p className={styleSkill.paragrafh}>Sequelize ORM</p>
                </div>
                <div>
                    <Image src={github} alt='github' className={styleSkill.img}/>
                    <p className={styleSkill.paragrafh}>GitHub</p>
                </div>
            </section>   
        </div>
    )   
}
 
export default Skills;
