import css from './Timer.module.css';
import clsx from 'clsx';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { calculateTimeLeft } from '../../utilitis/calculateTimeLeft';

const Timer = ({ isOpen, setIsOpen }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const visualButton = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === '00' &&
        newTimeLeft.hours === '00' &&
        newTimeLeft.minutes === '00' &&
        newTimeLeft.seconds === '00'
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx(!isOpen && css.timerContainer)}>
      <h3 className="thirdTitle">Реєструйся просто зараз</h3>
      <div className={css.timer}>
        <div className={css.timerEl}>
          <span className={css.timerNumber}>{timeLeft.days}</span>
          <span className={css.timerText}>днів</span>
        </div>
        <span className={css.timerPoint}>:</span>
        <div className={css.timerEl}>
          <span className={css.timerNumber}>{timeLeft.hours}</span>
          <span className={css.timerText}>годин</span>
        </div>
        <span className={css.timerPoint}>:</span>
        <div className={css.timerEl}>
          <span className={css.timerNumber}>{timeLeft.minutes}</span>
          <span className={css.timerText}>хвилин</span>
        </div>
        <span className={css.timerPoint}>:</span>
        <div className={css.timerEl}>
          <span
            className={clsx(css.timerNumber, css.timerNumberSeconds)}
          >
            {timeLeft.seconds}
          </span>
          <span className={css.timerText}>секунд</span>
        </div>
      </div>

      {!visualButton && !isOpen && (
        <button
          className="btnRegister"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Зареєструватися
        </button>
      )}
    </div>
  );
};

export default Timer;
