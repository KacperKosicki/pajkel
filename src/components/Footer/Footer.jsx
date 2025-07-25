import { useEffect, useState } from 'react';
import styles from './Footer.module.scss';

const Footer = ({ spyEnabled, onToggleSpy }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // odświeżanie co sekundę

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.glow}>
          © 2025 Pajkel Corp. 🚀 | Odwiedzin: 99 998 (z czego 99 997 to on)
        </p>

        <p className={styles.tagline}>
          „Bo Pajkel to nie imię – to styl życia.”
        </p>

        <p className={styles.time}>
          <strong>Pajkel aktualnie patrzy:</strong> {time}
        </p>

        <div className={styles.credits}>
          Made with ❤️ by <span>PajdeX</span>
        </div>
      </footer>

      <div className={styles.buttons}>
        <button onClick={onToggleSpy}>
          {spyEnabled ? 'Wyłącz SpyModal' : 'Włącz SpyModal'}
        </button>
        {showScrollTop && (
          <button onClick={scrollToTop}>Na górę</button>
        )}
      </div>
    </>
  );
};

export default Footer;
