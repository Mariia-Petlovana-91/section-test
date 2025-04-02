import css from './Logo.module.css';

import logo from '../../img/logo.svg';

const Logo = () => {
  return (
    <>
      <img className={css.imd} src={logo} alt="logo" />
    </>
  );
};

export default Logo;
