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

export const addProductSchema = yup.object().shape({
  category: yup.object().shape({
    name: yup.string().required('Выберите категорию'),
  }),
  brand: yup.object().shape({
    name: yup.string().required('Выберите бренд'),
  }),
  name: yup.string().required('Введите название товара'),
  processor: yup.string().required('Введите процессор'),
  description: yup.string().required('Введите описание товара'),
  battery: yup.string().required('Введите информацию о батарее'),
  price: yup.string().required('Введите цену товара'),
  // imgUrls: yup.array().of(yup.string()).required('Введите ссылки на картинки'),
  ram: yup.string().required('Выберите объем оперативной памяти'),
  storage: yup.string().required('Выберите объем памяти'),
  color: yup.object().shape({
    name: yup.string().required('Выберите цвет'),
  }),

  state: yup.string().required('Выберите состояние товара'),
  // packageContents: yup.array().of(yup.string()).required('Введите комплектацию товара'),
});
