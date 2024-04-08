import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const searchValidate = yup
  .object()
  .shape({
    search: yup.string().trim().required('Search is required and must be trimmed.'),
  })
  .strict();

export const loginSchema = yup.object().shape({
  userName: yup.string().min(3, 'Слишком короткий!').max(50, 'Слишком длинный!').required('*'),
  password: yup
    .string()
    .min(1)
    .matches(passwordRules, { message: 'Неправильный пароль' })
    .required('*'),
});

export const signupSchema = yup.object().shape({
  userName: yup.string().min(3, 'Слишком короткий!').max(50, 'Слишком длинный!').required('*'),
  password: yup
    .string()
    .min(1)
    .matches(passwordRules, { message: 'Пожалуйста, создайте более надежный пароль' })
    .required('*'),
});

export const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^0\(\d{3}\) \d{3}-\d{3}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

export const orderSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^0\(\d{3}\) \d{3}-\d{3}$/, 'Invalid phone number')
    .required('Phone number is required'),
  
});
