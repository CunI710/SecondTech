import React from 'react';
import delivery from '../../assets/icons/isometric-drone-delivery.png';
import price from '../../assets/icons/isometric-money-wallet-with-credit-card-and-receipt.png';
import quality from '../../assets/icons/isometric-personnel-search-and-choosing-the-best-candidate.png';
import technology from '../../assets/icons/isometric-workflow-visualization-with-kanban-board.png';
const Advantages = () => {
  const list = [
    {
      icon: technology,
      title: 'Широкий ассортимент бу техники',
      text: 'Мы предлагаем разнообразный выбор бывшей в употреблении техники, чтобы каждый клиент мог найти нужное устройство.',
    },
    {
      icon: quality,
      title: 'Проверенное качество и надежность',
      text: 'Весь наш товар проходит проверку на качество и надежность, чтобы вы могли быть уверены в его исправности и работоспособности.',
    },
    {
      icon: price,
      title: 'Доступные цены и специальные предложения',
      text: 'Мы предлагаем доступные цены на всю нашу продукцию, а также регулярные специальные предложения и скидки для наших клиентов.',
    },
    {
      icon: delivery,
      title: 'Удобные условия доставки и оплаты',
      text: 'Мы предлагаем удобные условия доставки и оплаты, чтобы сделать процесс покупки как можно более комфортным для вас.',
    },
  ];
  return (
    <div className="w-[90%] m-auto py-[65px]">
      <div className="flex justify-between gap-5 ">
        {list.map((item, i) => (
          <div
            key={i}
            className="w-[25%] py-[25px] px-3 shadow-xl rounded-lg bg-white flex flex-col gap-3 items-center text-center"
          >
            <img src={item.icon} alt="icon" className="w-[60%]" />
            <h2 className=" text-[16px] text-first ">{item.title}</h2>
            <p className="font-light text-[14px] text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
