import { targetDate } from '../constants/targetDate';

export const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  return {
    days: String(
      Math.floor(difference / (1000 * 60 * 60 * 24)),
    ).padStart(2, '0'),
    hours: String(
      Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
    ).padStart(2, '0'),
    minutes: String(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    ).padStart(2, '0'),
    seconds: String(
      Math.floor((difference % (1000 * 60)) / 1000),
    ).padStart(2, '0'),
  };
};
