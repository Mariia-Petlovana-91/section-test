import * as Yup from 'yup';

import { numberPhone, email } from '../constants/expressions';

export const schemaValidationForm = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Ім*я повинно містити мінінум 2 літери')
    .required('Ім*я не може бути порожнім'),
  email: Yup.string()
    .email(
      'Невірний емейл.Вкажіть будь ласка у форматі test@example.com',
    )
    .required('Емейл не може бути порожнім')
    .matches(email),
  phone: Yup.string()
    .required('Номер не може бути порожнім')
    .matches(
      numberPhone,
      'Невірний номер.Вкажіть будь ласка у форматі +380 00 000 0000',
    ),
  checkbox: Yup.boolean()
    .oneOf(
      [true],
      'Прийміть будь ласка Політику конфіденційності та Умови користування послугами',
    )
    .required(
      'Прийміть будь ласка Політику конфіденційності та Умови користування послугами',
    ),
});
