import React from 'react';
const Advantages = () => {
  const list = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: 'Широкий ассортимент бу техники',
      text: 'Мы предлагаем разнообразный выбор бывшей в употреблении техники, чтобы каждый клиент мог найти нужное устройство.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: 'Проверенное качество и надежность',
      text: 'Весь наш товар проходит проверку на качество и надежность, чтобы вы могли быть уверены в его исправности и работоспособности.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: 'Доступные цены и специальные предложения',
      text: 'Мы предлагаем доступные цены на всю нашу продукцию, а также регулярные специальные предложения и скидки для наших клиентов.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Удобные условия доставки и оплаты',
      text: 'Мы предлагаем удобные условия доставки и оплаты, чтобы сделать процесс покупки как можно более комфортным для вас.',
    },
  ];
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="w-[90%] m-auto px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Преимущества покупок у нас
          </h2>

          <p class="mx-auto font-light max-w-screen-md text-center text-gray-500 md:text-lg">
            Мы стремимся предоставить лучший сервис и качество для наших клиентов. Наш
            интернет-магазин специализируется на бывшей в употреблении технике, и мы гордимся
            следующими преимуществами
          </p>
        </div>

        <div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-16">
          {list.map((item, id) => (
            <div class="flex flex-col items-center" key={id}>
              <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ea3f8b] text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                {item.icon}
              </div>
              <h3 class="mb-2 text-center font-medium text-lg  md:text-xl">{item.title}</h3>
              <p class="mb-2 text-center font-light text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
