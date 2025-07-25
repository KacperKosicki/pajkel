import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>🎉 WITAMY W IMPERIUM <span>PAJKELA!</span></h1>
                <p>
                    Tutaj wszystko kręci się wokół jednej osoby... <strong>legendy</strong>. Przygotuj się na zdjęcia i fakty, których nie znajdziesz w Wikipedii 😎
                </p>
            </div>

            <img
                src="/images/pajkel.png"
                alt="Pajkel"
                className={styles.heroImage}
            />

            <div className={styles.wave}>
                <svg viewBox="0 0 3600 120" preserveAspectRatio="none">
                    <path
                        className={styles.wavePath}
                        d="M0,0 C150,100 350,0 600,80 C850,160 1050,20 1200,60 
         C1350,100 1550,0 1800,80 C2050,160 2250,20 2400,60 
         C2550,100 2750,0 3000,80 C3250,160 3450,20 3600,60 
         L3600,120 L0,120 Z"
                    />
                </svg>
            </div>

        </section>
    );
};

export default Hero;
