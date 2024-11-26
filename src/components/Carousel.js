import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css'; // Importe seu CSS

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/eu5.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Mudar imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
