import css from './Timer.module.css';
import clsx from 'clsx';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { calculateTimeLeft } from '../../utilitis/calculateTimeLeft';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const visualButton = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (
      timeLeft.days === '00' &&
      timeLeft.hours === '00' &&
      timeLeft.minutes === '00' &&
      timeLeft.seconds === '00'
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeLeft]);

  return (
    <div className={css.timer}>
      <h3 className="thirdTitle">Реєструйся просто зараз</h3>
      <div className={css.timerEl}>
        <span className={css.timerNumber}>{timeLeft.days}</span>
        <span>днів</span>
      </div>
      <span className={css.timerPoint}>:</span>
      <div className={css.timerEl}>
        <span className={css.timerNumber}>{timeLeft.hours}</span>
        <span>годин</span>
      </div>
      <span className={css.timerPoint}>:</span>
      <div className={css.timerEl}>
        <span className={css.timerNumber}>{timeLeft.minutes}</span>
        <span>хвилин</span>
      </div>
      <span className={css.timerPoint}>:</span>
      <div className={css.timerEl}>
        <span
          className={clsx(css.timerNumber, css.timerNumberSeconds)}
        >
          {timeLeft.seconds}
        </span>
        <span>секунд</span>
      </div>
      {!visualButton && (
        <button className="btnRegister" type="button">
          Зареєструватися
        </button>
      )}
    </div>
  );
};

export default Timer;
