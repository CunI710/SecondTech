import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    // <div className="mt-12 relative ">
    //   <img
    //     className=""
    //     src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt="img"
    //   />
    //   <div className="absolute top-[40%] left-[50px] w-[50%]">
    //     <p className="font-bold text-[36px] text-first">Упс, корзина пустая(</p>
    //     <p className="font-light text-[24px] text-white">
    //       Вероятней всего, вы не выбрали ещё товар. Для того, чтобы выбрать товар, перейдите на
    //       страницу товара.
    //     </p>
    //   </div>
    // </div>
    <div className="w-screen mt-[80px] flex items-center justify-center h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="relative z-10 py-[20%] w-[90%] m-auto text-center text-white">
        <p className="font-semibold text-[80px]">Упс, корзина пустая</p>
        <p className="font-light text-[20px]">
          Вероятней всего, вы не выбрали ещё товар. Для того, чтобы выбрать товар, перейдите на
          страницу товара.
        </p>
        {/* <h3 className="text-first">Это страница закроется через {seconds}</h3> */}
      </div>
    </div>
  );
};

export default EmptyCart;
