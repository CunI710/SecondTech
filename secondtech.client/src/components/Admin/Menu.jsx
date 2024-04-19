import React from 'react';
import { Link } from 'react-router-dom';
const adminMenuItem = [
  {
    id: 1,
    path: 'products',
    title: 'Все товары',
    target: '_self',
  },
  {
    id: 2,
    path: 'addProduct',
    title: 'Добавить товар',
    target: '_self',
  },
  {
    id: 3,
    path: 'https://ibb.co/album/Fm7NB7',
    title: 'Загрузить картинку',
    target: '_blank',
  },
  {
    id: 4,
    path: 'users',
    title: 'Пользователи',
    target: '_self',
  },
];
const Menu = () => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white w-[100%] mt-[60px]">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Admin
        </span>

        <ul className="mt-2 space-y-1 px-4">
          {adminMenuItem.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                target={item.target}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Menu;
