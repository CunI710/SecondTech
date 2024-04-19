export const phoneBrands = [
  'Apple',
  'Samsung',
  'Huawei',
  'Xiaomi',
  'Sony',
  'Google',
  'OnePlus',
  'LG',
  'Nokia',
];

export const categories = ['Телефон', 'Ноутбук', 'Планшет'];

export const states = [
  'Новое',
  'Как новое (в отличном состоянии)',
  'Хорошее (с небольшими следами использования)',
  'Удовлетворительное (с видимыми признаками использования, но работоспособное)',
  'Плохое (существенные дефекты, но работающее)',
];

export const laptopBrands = [
  'Lenovo',
  'HP',
  'Dell',
  'Asus',
  'Acer',
  'MSI',
  'Apple',
  'Microsoft',
  'Huawei',
];

export const tabletBrands = [
  'Apple',
  'Samsung',
  'Lenovo',
  'Huawei',
  'Microsoft',
  'Amazon',
  'ASUS',
  'Google',
  'Acer',
];

export const colors = [
  'Черный',
  'Белый',
  'Серый',
  'Серебристый',
  'Золотистый',
  'Розовый',
  'Синий',
  'Зеленый',
  'Красный',
  'Оранжевый',
  'Фиолетовый',
];

export const rams = ['2 ГБ', '3 ГБ', '4 ГБ', '6 ГБ', '8 ГБ', '16 ГБ', '32 ГБ', '64 ГБ', '128 ГБ'];

export const storages = [
  '4 ГБ',
  '8 ГБ',
  '16 ГБ',
  '32 ГБ',
  '64 ГБ',
  '128 ГБ',
  '256 ГБ',
  '512 ГБ',
  '1 TB',
];

export const initialValues = {
  name: '',
  category: { name: 'Телефон' },
  price: '',
  description: '',
  state: 'Новое',
  imgUrls: [
    {
      url: '',
    },
  ],
  color: {
    name: 'Черный',
  },
  brand: { name: 'Apple' },
  storage: '4 ГБ',
  ram: '2 ГБ',
  model: '',
  processor: '',
  battery: '',
  characteristics: [{ name: '', value: '' }],
  packageContents: [],
};

export const ProductTab = [
  {
    title: 'Характеристики',
    link: 0,
  },
  {
    title: 'Как оформить заказ',
    link: 1,
  },
  {
    title: 'Способы оплаты',
    link: 2,
  },
  {
    title: 'Доставка',
    link: 3,
  },
  {
    title: 'Часто задаваемые вопросы',
    link: 4,
  },
];
