import css from './Form.module.css';
import clsx from 'clsx';

import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FaCheck } from 'react-icons/fa6';

import { schemaValidationForm } from '../../utilitis/validation';

import { postData } from '../api/api';

import FormHeader from './FormHeader/FormHeader';
import Timer from '../Timer/Timer';

const Form = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        <Timer />
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            className={css.formInput}
            {...register('name')}
            placeholder="Введи своє ім’я"
          />
          {errors.name && (
            <div className={css.formError}>{errors.name.message}</div>
          )}

          <input
            className={css.formInput}
            {...register('email')}
            placeholder="Введи свій E-mail"
          />
          {errors.email && (
            <div className={css.formError}>
              {errors.email.message}
            </div>
          )}

          <div className={css.inputWrapper}>
            <input
              className={clsx(css.formInput, css.formInputPhone)}
              {...register('phone')}
              placeholder="+380 95 -- -- ---"
            />
          </div>
          {errors.phone && (
            <div className={css.formError}>
              {errors.phone.message}
            </div>
          )}

          <div className={css.formCheckbox}>
            <input
              type="checkbox"
              className="visually-hidden"
              {...register('checkbox')}
            />
            <div className={css.formCheck}>
              <FaCheck className={css.formCheckIcon} />
            </div>
            <p className={css.formText}>
              Згоден з
              <a className={css.formLink} href="#">
                Політика конфеденційності
              </a>
              та
              <a className={css.formLink} href="#">
                Умови користування послугами
              </a>
            </p>
          </div>

          {errors.checkbox && (
            <div className={css.formError}>
              {errors.checkbox.message}
            </div>
          )}

          <button className={css.formBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    )
  );
};

export default Form;
