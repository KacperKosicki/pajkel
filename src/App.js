import { useState } from 'react';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import FunnyGallery from './components/FunnyGallery/FunnyGallery';
import Footer from './components/Footer/Footer';
import SpyModal from './components/SpyModal/SpyModal';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import UnlockScreen from './components/UnlockScreen/UnlockScreen'; // ⬅
import './app.scss';
import BirthdayEvents from './components/BirthdayEvents/BirthdayEvents';

function App() {
  const [spyEnabled, setSpyEnabled] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false); // ⬅ nowy stan

  const toggleSpy = () => setSpyEnabled(prev => !prev);
  const handleUnlock = () => setIsUnlocked(true);

  return (
    <>
      {!isUnlocked && <UnlockScreen onUnlock={handleUnlock} />}
      {isUnlocked && (
        <>
          <div className="videoBackground">
            <video autoPlay muted loop playsInline>
              <source src="/videos/pajkel-tlo.mp4" type="video/mp4" />
            </video>
            <div className="videoOverlay" />
          </div>

          <main className="appWrapper">
            <BackgroundMusic />
            <Hero />
            <InfoSection />
            <FunnyGallery />
            <BirthdayEvents />
            <Footer spyEnabled={spyEnabled} onToggleSpy={toggleSpy} />
            {spyEnabled && <SpyModal />}
          </main>
        </>
      )}
    </>
  );
}

export default App;
