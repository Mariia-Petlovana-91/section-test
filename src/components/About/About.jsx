import css from './About.module.css';
import clsx from 'clsx';

import { useMediaQuery } from 'react-responsive';

import Timer from '../Timer/Timer';
import logo from '../../img/logo.svg';

const About = ({ isOpen, setIsOpen }) => {
  const visualTimer = useMediaQuery({ minWidth: 768 });

  return (
    <div className={css.about}>
      <img className={css.aboutImd} src={logo} alt="logo" />
      <ul className={css.aboutList}>
        <li className={css.aboutItem}>
          <p about={css.aboutListText}>
            <span
              className={clsx(css.aboutDecor, css.aboutTopRight)}
            ></span>
            <span
              className={clsx(css.aboutDecor, css.aboutTopLeft)}
            ></span>
            Безоплатний вебінар
          </p>
          <span
            className={clsx(css.aboutDecor, css.aboutBottomRight)}
          ></span>
          <span
            className={clsx(css.aboutDecor, css.aboutBottomLeft)}
          ></span>
        </li>
        <li className={css.aboutItem}>
          <p about={css.aboutListText}>
            <span
              className={clsx(css.aboutDecor, css.aboutTopRight)}
            ></span>
            <span
              className={clsx(css.aboutDecor, css.aboutTopLeft)}
            ></span>
            Старт:{' '}
            <span className={css.aboutTextDate}>10 січня 19:30</span>
          </p>
          <span
            className={clsx(css.aboutDecor, css.aboutBottomRight)}
          ></span>
          <span
            className={clsx(css.aboutDecor, css.aboutBottomLeft)}
          ></span>
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
