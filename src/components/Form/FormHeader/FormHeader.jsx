import { useMediaQuery } from 'react-responsive';

import { RiCloseLargeFill } from 'react-icons/ri';

import css from './FormHeader.module.css';

import Logo from '../../Logo/Logo';

const FormHeader = ({ onClose }) => {
  const isNone = useMediaQuery({ minWidth: 768 });
  return (
    !isNone && (
      <div className={css.formHeader}>
        <Logo />
        <button className={css.btn} type="button" onClick={onClose}>
          <RiCloseLargeFill className={css.icon} />
        </button>
      </div>
    )
  );
};

export default FormHeader;
