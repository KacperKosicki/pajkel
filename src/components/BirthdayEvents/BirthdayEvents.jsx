import React from 'react';
import styles from './BirthdayEvents.module.scss';

const events = [
  { year: 1902, desc: "Willis Carrier projektuje pierwszą klimatyzację." },
  { year: 1918, desc: "Zamordowano cara Mikołaja II i jego rodzinę w Jekaterynburgu." },
  { year: 1938, desc: "Pilot 'Wrong Way' Corrigan wylądował w Irlandii lecąc odwrotnie." },
  { year: 1955, desc: "Otwarto pierwszy Disneyland w Anaheim (Kalifornia)." },
  { year: 1959, desc: "Mary Leakey odkryła czaszkę Paranthropus boisei – nowy hominin." },
  { year: 1966, desc: "Jim Ryun ustanawia rekord świata w biegu na milę: 3:51,3." },
  { year: 1975, desc: "Apollo–Sojuz: pierwsze międzynarodowe połączenie statków kosmicznych." },
  { year: 1976, desc: "Startują Letnie Igrzyska Olimpijskie w Montrealu." },
  { year: 1995, desc: "Zakończył się szczyt India–Pakistan o Kaszmir – bez porozumienia." },
  { year: 2001, desc: "Concorde wraca do lotów pasażerskich po katastrofie." },
  { year: 2006, desc: "Trzęsienie ziemi na Jawie (Indonezja) – setki ofiar." },
  { year: 2007, desc: "Katastrofa lotnicza TAM A320 w São Paulo – 199 ofiar." },
  { year: 2014, desc: "Malezyjski samolot MH17 zestrzelony nad Ukrainą – 298 ofiar." },
  { year: 2018, desc: "Odkryto kilkanaście nowych księżyców Jowisza." },
  { year: '🎂', desc: "Urodziny Davida Hasselhoffa, Angeli Merkel i Luke'a Bryana!" },
  { year: '📅', desc: "Światowy Dzień Emoji – bo to właśnie ta data widnieje na emoji kalendarza." },
  { year: '⚖️', desc: "Międzynarodowy Dzień Sprawiedliwości – rocznica utworzenia Międzynarodowego Trybunału Karnego." },
  { year: '🐷', desc: "Yellow Pig Day – matematyczne święto liczby 17 z żółtą świnką." },
];

const BirthdayEvents = () => {
  return (
    <section className={styles.birthdayEvents}>
      <h2>🎉 17 lipca – wydarzenia z różnych lat</h2>
      <ul>
        {events.map((e, idx) => (
          <li key={idx}>
            <strong>{e.year}</strong> {e.desc}
          </li>
        ))}
      </ul>
      <p>📌 Z tej daty dzieje się naprawdę sporo – od historii po emoji 😄</p>
    </section>
  );
};

export default BirthdayEvents;
