import { useEffect, useState } from 'react';
import styles from './SpyModal.module.scss';
import spyMessages from '../../data/spyMessages';

const SpyModal = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let timeout;
    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const random = spyMessages[Math.floor(Math.random() * spyMessages.length)];
        setMessage(random);
        setShow(true);
      }, 10000); // 10 sekund
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach(e => window.addEventListener(e, resetTimer));

    resetTimer(); // start

    return () => {
      events.forEach(e => window.removeEventListener(e, resetTimer));
      clearTimeout(timeout);
    };
  }, []);

  if (!show || !message) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => setShow(false)}>
      <div className={styles.modal}>
        <img src={message.img} alt="Pajkel podgląda" />
        <p>{message.text}</p>
        <button onClick={() => setShow(false)}>Zamknij</button>
      </div>
    </div>
  );
};

export default SpyModal;
