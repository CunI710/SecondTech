import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Loading from '../components/UI/Loading';
import { useFormik } from 'formik';
import { BASE_URL } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
const Sale = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const ProductId = urlParams.get('productId');
  const Email = urlParams.get('email');
  const FirstName = urlParams.get('firstName');
  const LastName = urlParams.get('lastName');
  const City = urlParams.get('city');
  const Address = urlParams.get('address');
  const Number = urlParams.get('number');
  const initialValues = {
    ProductId,
    FirstName,
    LastName,
    Email,
    Number,
    City,
    Address,
  };

  useEffect(() => {
    if (ProductId) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [ProductId]);

  const { values, handleBlur, errors, touched, resetForm, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/Product/confirmSale`, {
          params: values,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status !== 200) {
          throw new Error('Сетевая ошибка');
        }
        setLoading(false);
        setShow(true);
        const timeout = setTimeout(() => {
          setShow(false);
          navigate('/');
        }, 3000);

        return () => clearTimeout(timeout);
      } catch (error) {
        console.error('Ошибка fetch:', error);
      }
    },
  });

  return (
    <div className="w-screen mt-[80px] flex items-center justify-center h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundAttachment: 'fixed',
        }}
      ></div>
      {!show ? (
        <div className="relative z-10 py-[20%] w-[90%] m-auto text-left text-white">
          <p className="font-semibold text-[30px]">Подтверждение заказа</p>
          <div className="font-light text-[20px] ">
            <p>
              ID продукта: <span className="text-first font-normal">{values.ProductId}</span>
            </p>
            <p>
              Имя: <span className="text-first font-normal">{values.FirstName}</span>
            </p>
            <p>
              Фамилия: <span className="text-first font-normal">{values.LastName}</span>
            </p>
            <p>
              Город: <span className="text-first font-normal">{values.City}</span>
            </p>
            <p>
              Адрес: <span className="text-first font-normal">{values.Address}</span>
            </p>
            <p>
              Номер телефона: <span className="text-first font-normal">{values.Number}</span>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {loading ? (
              <Loading />
            ) : (
              <div className="flex gap-4">
                <Link
                  to="/"
                  className="bg-white text-[#000] py-3 px-[40px] rounded-full  font-semibold my-4"
                >
                  Отменить и домой
                </Link>
                <button
                  disabled={disable}
                  type="submit"
                  className="bg-first  py-3 px-[40px] rounded-full  font-semibold my-4"
                >
                  Подтвердить заказ
                </button>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="relative z-10 py-[20%] w-[90%] m-auto text-center text-white">
          <p className="font-semibold text-[80px]">Подтвреждение принято!</p>
          <p className="font-light text-[20px]">Вы будете перенаправлены на главную страницу</p>
        </div>
      )}
    </div>
  );
};

export default Sale;
