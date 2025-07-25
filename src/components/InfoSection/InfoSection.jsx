import styles from './InfoSection.module.scss';

const facts = [
  "🔤 Zawsze mówi „przyszedłem”, nigdy „przyszłem” — lingwistyczny boss.",
  "💬 Każdego łamańca językowego wypowiada bez zająknięcia. Nawet *„Szedł Sasza suchą szosą”* trzy razy z rzędu.",
  "🎮 Spocuch w grach — ale taki, co nawet loading ekran się go boi.",
  "🧠 Oficjalnie: inżynier programowania. Nieoficjalnie: człowiek IDE.",
  "💸 Pajkomat™ — pożycza hajs z lepszym kursem niż Revolut.",
  "🕵️‍♂️ Status: prawiczek. Ale taki, co z wyboru. Dla równowagi wszechświata.",
  "👑 Ego TOP. Tak wysokie, że trzeba drona, żeby je dojrzeć.",
  "😤 Nie potrafi przegrywać — nawet z lagiem udowodni, że wygrał.",
  "💔 Szuka dziewczyny, ale nie umie znaleźć. Może to ty ją znasz?",
  "🥪 Jedyne kanapki jakie robi: chleb, ketchup i ser. Ale za to z duszą.",
];

const InfoSection = () => {
  return (
    <section className={styles.info}>
      <h2>📜 Fakty, które znają tylko nieliczni wtajemniczeni</h2>
      <ul>
        {facts.map((fact, index) => (
          <li key={index} className={styles.fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
};

export default InfoSection;
