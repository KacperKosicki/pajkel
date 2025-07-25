import { useEffect, useState } from 'react';
import styles from './FunnyGallery.module.scss';
import funnyGallery from '../../data/galleryData';

const FunnyGallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      if (!isPaused) {
        setStartIndex(prev => (prev + 1) % funnyGallery.length);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isPaused]);

  const getVisibleImages = () => {
    if (isMobile) {
      return [funnyGallery[startIndex]];
    } else {
      const images = [];
      for (let i = 0; i < 3; i++) {
        const index = (startIndex + i) % funnyGallery.length;
        images.push(funnyGallery[index]);
      }
      return images;
    }
  };

  const handleImageClick = (src) => {
    setZoomedImage(src);
    setIsPaused(true);
  };

  const closeZoom = () => {
    setZoomedImage(null);
    setIsPaused(false);
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {getVisibleImages().map((img, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={img.src}
                alt={`Funny ${index}`}
                onClick={() => handleImageClick(img.src)}
              />
            </div>
          ))}
        </div>
      </div>

      {zoomedImage && (
        <div className={styles.lightbox} onClick={closeZoom}>
          <img src={zoomedImage} alt="Zoomed" className={styles.zoomed} />
          <button className={styles.closeBtn} onClick={closeZoom}>×</button>
        </div>
      )}
    </section>
  );
};

export default FunnyGallery;
