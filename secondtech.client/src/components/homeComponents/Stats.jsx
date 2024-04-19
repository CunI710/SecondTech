import React from 'react';

const stats = [
  { id: 1, title: 'Общее количество заказов', text: '150' },
  { id: 2, title: 'Средний чек', text: '25 000 сом' },
  { id: 3, title: 'Количество клиентов', text: '712' },
  { id: 4, title: 'Продажи за последний месяц', text: '3 750 000 сом' },
];

const Statistics = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto w-[90%] px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Наша команда в цифрах
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Здесь представлена информация о работе нашей команды по итогам последнего месяца.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8"
            >
              <div className="text-lg font-bold text-first sm:text-xl md:text-2xl">{item.text}</div>
              <div className="text-sm font-semibold sm:text-base text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
