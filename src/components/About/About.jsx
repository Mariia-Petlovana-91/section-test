import css from './About.module.css';
import clsx from 'clsx';

import { useMediaQuery } from 'react-responsive';

import Timer from '../Timer/Timer';

const About = ({ isOpen, setIsOpen }) => {
  const visualTimer = useMediaQuery({ minWidth: 768 });

  return (
    <div className={css.about}>
      <ul className={css.aboutList}>
        <li className={css.aboutItem}>
          <div
            className={clsx(css.aboutDecor, css.aboutTopRight)}
          ></div>
          <div
            className={clsx(css.aboutDecor, css.aboutTopLeft)}
          ></div>
          <p className={css.aboutListText}>Безоплатний вебінар</p>
          <div
            className={clsx(css.aboutDecor, css.aboutBottomRight)}
          ></div>
          <div
            className={clsx(css.aboutDecor, css.aboutBottomLeft)}
          ></div>
        </li>
        <li className={clsx(css.aboutItem, css.aboutItemSecond)}>
          <div
            className={clsx(css.aboutDecor, css.aboutTopRight)}
          ></div>
          <div
            className={clsx(css.aboutDecor, css.aboutTopLeft)}
          ></div>
          <p className={css.aboutListText}>
            Старт:{' '}
            <span className={css.aboutTextDate}>10 січня 19:30</span>
          </p>
          <div
            className={clsx(css.aboutDecor, css.aboutBottomRight)}
          ></div>
          <div
            className={clsx(css.aboutDecor, css.aboutBottomLeft)}
          ></div>
        </li>
      </ul>
      <h2 className="secondaryTitle">
        Навчіться створювати Excel-таблиці на pro-рівні
      </h2>
      <p className={css.aboutDescript}>
        Опануйте функціонал Microsoft Excel, автоматизуйте свою роботу
        та створюйте таблиці швидко і в задоволення
      </p>
      {!visualTimer && (
        <Timer isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default About;
