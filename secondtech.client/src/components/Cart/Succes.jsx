import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Succes = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timeout); // Очистка тайм-аута при unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="w-screen mt-[80px] flex items-center justify-center h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446501356021-84cf6b450d07?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="relative z-10 py-[20%] w-[90%] m-auto text-center text-white">
        <p className="font-semibold text-[80px]">Спасибо за ваш заказ!</p>
        <p className="font-light text-[20px]">
          Мы свяжемся с вами в течении часа для уточнения всех деталей. Подписывайтесь на нас в{' '}
          <Link
            target="_blank"
            to="https://www.youtube.com/"
            className="cursor-pointer font-light text-first"
          >
            Instagram
          </Link>
          и следите за новостями в мире гаджетов.
        </p>
        <h3 className="text-first">Это страница закроется через {seconds}</h3>
      </div>
    </div>
  );
};

export default Succes;
