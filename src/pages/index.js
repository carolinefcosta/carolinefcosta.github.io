import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import laptop from '../images/laptop.gif';
import Image from 'next/image';
import styleHome from '../components/Home.module.css';
import Swal from 'sweetalert2';
import Bot from '@/components/Bot';
import iconLinkedin from '../images/linkedin.png';
import iconGit from '../images/github.png';

export default function Home() {
  // let [name, setName] = useState('');

  // function guestName() {
  //   Swal.fire({
  //     title: 'Qual seu nome?',
  //     width: 600,
  //     padding: '3em',
  //     color: '#716add',
  //     background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
  //     backdrop: `
  //       rgba(0,0,123,0.4)
  //       url("https://sweetalert2.github.io/images/nyan-cat.gif")
  //       left top
  //       no-repeat
  //     `,
  //     input: 'text',
  //     inputAttributes: {
  //       autocapitalize: 'off'
  //     },
  //     showCancelButton: true,
  //     confirmButtonText: 'Enviar',
  //     showLoaderOnConfirm: true,

  //     preConfirm: (login) => {
  //       // return fetch(`//api.github.com/users/${login}`)
  //       //   .then(response => {
  //       //     if (!response.ok) {
  //       //       throw new Error(response.statusText)
  //       //     }
  //       //     return response.json()
  //       //   })
  //       //   .catch(error => {
  //       //     Swal.showValidationMessage(
  //       //       `Request failed: ${error}`
  //       //     )
  //       //   })
  //     },
  //     allowOutsideClick: () => !Swal.isLoading()
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         // title: `${result.value.login}'s avatar`,
  //         // imageUrl: result.value.avatar_url
  //       })
  //     }
  //   })
  // }
  
  // function guestName() {
  // let question = prompt('Qual seu nome?')
  // if (question !== null) {
  //   setName(question);
  // }
  // }

  // useEffect(() => {
  //   guestName();
  // }, [])

    return (
        <div className={styleHome.main}>
          <Header />   
          <div >
            <p className={styleHome.txt}>Olá! Seja bem-vindo(a) ao meu Portfólio!</p>
            <p className={styleHome.txt}>Sou Caroline Fernandes,</p>
            <p className={styleHome.txt}>Desenvolvedora Web Full Stack.</p>
          </div>
          {/* <div className={styleHome.div}>
            <a href="https://github.com/carolinefcosta" className={styleHome.git}>
              <Image src={iconGit} alt='icon-linkedIn' />
            </a>
            <a href="https://www.linkedin.com/in/carolinefernandescosta/" className={styleHome.linkedin}>
              <Image src={iconLinkedin} alt='icon-linkedIn' />
            </a>
          </div> */}
          <Image src={laptop} alt='gif-animado' className={styleHome.img}/>
          <Bot />
        </div>
    ) 
}
