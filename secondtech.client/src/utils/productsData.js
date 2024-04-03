export const phoneBrands = [
  'Выберите бренд:',
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

export const categories = ['Выберите категорию:', 'Телефон', 'Ноутбук'];

export const states = [
  'Выберите состояние:',
  'Новое',
  'Как новое (в отличном состоянии)',
  'Хорошее (с небольшими следами использования)',
  'Удовлетворительное (с видимыми признаками использования, но работоспособное)',
  'Плохое (существенные дефекты, но работающее)',
];

export const laptopBrands = [
  'Выберите бренд:',
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

export const colors = [
  'Выберите цвет:',
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

export const rams = [
  'Выберите (ОЗУ):',
  '2 ГБ',
  '3 ГБ',
  '4 ГБ',
  '6 ГБ',
  '8 ГБ',
  '16 ГБ',
  '32 ГБ',
  '64 ГБ',
  '128 ГБ',
];

export const storages = [
  'Выберите память:',
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
  category: { name: '' },
  price: '',
  description: '',
  likes: 1,
  state: '',
  // img: '',
  imgUrl: 'https://i.ibb.co/FqZty3B/image.png',
  color: {
    name: '',
  },
  brand: { name: '' },
  storage: '',
  ram: '',
  model: '',
  processor: '',
  battery: '',
  characteristics: [{ name: '', value: '' }],
  packageContents: [],
};
