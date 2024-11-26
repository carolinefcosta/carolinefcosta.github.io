import Image from 'next/image';
import React from 'react';
import whatsapp from '../images/whatsapp.png';

function Bot() {
  return(
    <div>
      <section>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5584996145856" className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-gray-900 text-4xl w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
          <Image src={whatsapp} alt='icon-whats' />
        </a>
      </section>
    </div>
  )
}

export default Bot;