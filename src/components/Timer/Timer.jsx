import css from './Timer.module.css';

import { useState, useEffect } from 'react';

import { calculateTimeLeft } from '../../utilitis/calculateTimeLeft';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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
    <div className="timer-container">
      <span>{timeLeft.days}</span>:<span>{timeLeft.hours}</span>:
      <span>{timeLeft.minutes}</span>:<span>{timeLeft.seconds}</span>
    </div>
  );
};

export default Timer;
