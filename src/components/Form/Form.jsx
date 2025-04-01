import css from './Form.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaValidationForm } from '../../utilitis/validation';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationForm),
  });

  const onSubmit = async (data) => {
    await postData(data);
    //     window.location.reload();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={css.formInput} {...register('name')} />
      {errors.name && (
        <div className={css.formError}>{errors.name.message}</div>
      )}

      <input className={css.formInput} {...register('email')} />
      {errors.email && (
        <div className={css.formError}>{errors.email.message}</div>
      )}

      <input className={css.formInput} {...register('phone')} />
      {errors.phone && (
        <div className={css.formError}>{errors.phone.message}</div>
      )}

      <input
        type="checkbox"
        className={css.formCheckbox}
        {...register('checkbox')}
      />
      {errors.checkbox && (
        <div className={css.formError}>{errors.checkbox.message}</div>
      )}

      <button className={css.formBtn} type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
