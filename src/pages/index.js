// import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import laptop from '../images/laptop.gif';
import Image from 'next/image';
import styleHome from '../components/Home.module.css';
import Swal from 'sweetalert2';
import imgGit from '../images/github.jpeg';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [name, setName] = useState('');

  function guestName() {
    Swal.fire({
      title: 'Qual seu nome?',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      showLoaderOnConfirm: true,

      preConfirm: (login) => {
        // return fetch(`//api.github.com/users/${login}`)
        //   .then(response => {
        //     if (!response.ok) {
        //       throw new Error(response.statusText)
        //     }
        //     return response.json()
        //   })
        //   .catch(error => {
        //     Swal.showValidationMessage(
        //       `Request failed: ${error}`
        //     )
        //   })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          // title: `${result.value.login}'s avatar`,
          // imageUrl: result.value.avatar_url
        })
      }
    })
  }
  
  // function guestName() {
  // let question = prompt('Qual seu nome?')
  // if (question !== null) {
  //   setName(question);
  // }
  // }

  useEffect(() => {
    guestName();
  }, [])

    return (
        <div className={styleHome.main}>
          <Header />    
          <div>
            <div className={styleHome.txt}>Olá, {name}! Seja bem-vindo(a) ao meu Portfólio!</div>
            <Image src={imgGit} alt='github'/>
          </div>
          <Image src={laptop} alt='gif-animado' className={styleHome.img}/>
        </div>
    ) 
}
