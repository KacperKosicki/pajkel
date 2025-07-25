import { useState, useEffect } from 'react';
import styles from './UnlockScreen.module.scss';

const CORRECT_CODE = '#.Na.€.23.52.18.A3.*.%.12.Q.X.!.P.13'.split('.');

const UnlockScreen = ({ onUnlock }) => {
  const [inputValues, setInputValues] = useState(() => {
    const saved = localStorage.getItem('partialCode');
    return saved ? JSON.parse(saved) : Array(CORRECT_CODE.length).fill('');
  });
  const [fieldStatus, setFieldStatus] = useState(Array(CORRECT_CODE.length).fill(null));
  const [error, setError] = useState(false);

  // ✅ Sprawdź, czy kod już wpisany
  useEffect(() => {
    const access = localStorage.getItem('accessGranted');
    if (access === 'true') {
      onUnlock();
    }
  }, [onUnlock]);

  // 💾 Zapisuj postęp w localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem('partialCode', JSON.stringify(inputValues));
  }, [inputValues]);

  const handleChange = (value, index) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
    setError(false);
    setFieldStatus(Array(CORRECT_CODE.length).fill(null)); // reset statusów po wpisie
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const statuses = inputValues.map((val, i) => val === CORRECT_CODE[i]);
    setFieldStatus(statuses);
    const isCorrect = statuses.every((status) => status);
    if (isCorrect) {
      localStorage.setItem('accessGranted', 'true');
      localStorage.removeItem('partialCode');
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.overlay}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>🔒 Podaj kod dostępu</h2>
        <div className={styles.inputs}>
          {CORRECT_CODE.map((_, index) => {
            const status = fieldStatus[index];
            const className =
              status === true ? styles.correct :
              status === false ? styles.incorrect :
              '';
            return (
              <input
                key={index}
                type="text"
                maxLength={4}
                value={inputValues[index]}
                onChange={(e) => handleChange(e.target.value, index)}
                placeholder={`${index + 1}`}
                className={className}
              />
            );
          })}
        </div>

        <button type="submit">Odblokuj</button>

        {error && <p className={styles.errorText}>Niepoprawny kod. Spróbuj ponownie.</p>}

        {fieldStatus.some((s) => s !== null) && (
          <p className={styles.infoText}>
            ✅ Poprawnych: {fieldStatus.filter((s) => s === true).length} / {CORRECT_CODE.length}
          </p>
        )}
      </form>
    </div>
  );
};

export default UnlockScreen;
