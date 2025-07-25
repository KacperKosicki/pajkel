// components/BackgroundMusic.jsx
import { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Automatyczne odtworzenie przy pierwszym kliknięciu (wymóg przeglądarek)
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
        setPlaying(true);
        window.removeEventListener('click', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setPlaying(!playing);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/pajkel-muzyka-tlo.mp3" loop />
      <button
        onClick={toggleMusic}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 9999,
          background: '#2d2d2d',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '10px',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        {playing ? '🔇 Wyłącz muzykę' : '🔊 Włącz muzykę'}
      </button>
    </>
  );
};

export default BackgroundMusic;
