import css from './Form.module.css';
import clsx from 'clsx';

import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FaCheck } from 'react-icons/fa6';

import { schemaValidationForm } from '../../utilitis/validation';

import { postData } from '../../api/api';

import FormHeader from './FormHeader/FormHeader';
import Timer from '../Timer/Timer';

const Form = ({ isOpen, setIsOpen }) => {
  const visualForm = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (visualForm) {
      setIsOpen(true);
    }
  }, [visualForm, setIsOpen]);

  const onClose = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationForm),
  });

  const onSubmit = async (data) => {
    await postData(data);
    reset();
  };

  return (
    isOpen && (
      <div className={css.formBackdrop}>
        <FormHeader onClose={onClose} />
        <Timer isOpen={isOpen} setIsOpen={setIsOpen} />
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={css.formInput}
            {...register('name')}
            placeholder="Введи своє ім’я"
          />
          {errors.name && (
            <p className={css.formError}>{errors.name.message}</p>
          )}

          <input
            className={css.formInput}
            {...register('email')}
            placeholder="Введи свій E-mail"
          />
          {errors.email && (
            <p className={css.formError}>{errors.email.message}</p>
          )}

          <div className={css.inputWrapper}>
            <input
              className={clsx(css.formInput, css.formInputPhone)}
              {...register('phone')}
              placeholder="+380 95 -- -- ---"
            />
          </div>
          {errors.phone && (
            <p className={css.formError}>{errors.phone.message}</p>
          )}

          <div className={css.formCheckbox}>
            <input
              type="checkbox"
              {...register('checkbox')}
              id="agree"
            />
            <label className={css.formCheck} htmlFor="agree">
              <FaCheck className={css.formCheckIcon} />
            </label>
            <p className={css.formText}>
              Згоден з &#8201;
              <a className={css.formLink} href="#">
                Політикою конфіденційності
              </a>{' '}
              &#8201; та &#8201;
              <a className={css.formLink} href="#">
                Умовами користування послугами
              </a>
            </p>
          </div>

          {errors.checkbox && (
            <p className={css.formError}>{errors.checkbox.message}</p>
          )}

          <button
            className={clsx('btnRegister', css.formBtn)}
            type="submit"
          >
            Зареєструватися
          </button>
        </form>
      </div>
    )
  );
};

export default Form;
