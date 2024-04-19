import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { signupSchema } from '../schemas/validation';
import { BASE_URL } from '../utils/constants';
const showToast = (text, status) => {
  if (status) {
    toast.success(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  } else {
    toast.error(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }
};

const Signup = () => {
  const navigate = useNavigate();
  const { values, handleBlur, errors, touched, resetForm, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`${BASE_URL}/User/register`, values);

        localStorage.setItem('token', data.jwt);
        localStorage.setItem('role', data.userInfo.role);

        showToast('Аккаунт успешно создан ;)', true);
        resetForm();
        navigate('/login');
      } catch (error) {
        console.log(error);
        showToast('Упс, какая то ошибка ;)', false);
      }
    },
  });

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 my-[80px] ">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Регистрация
        </h2>

        <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label
                htmlhtmlFor="userName"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Имя пользователья
              </label>
              <Input
                type="text"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2"
              />
              {errors.userName && touched.userName ? (
                <p className="text-[12px] text-first pt-2">{errors.userName}</p>
              ) : (
                ''
              )}
            </div>

            <div>
              <label
                htmlhtmlFor="password"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Пароль
              </label>
              <Input.Password
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 "
              />
              {errors.password && touched.password ? (
                <p className="text-[12px] text-first pt-2">{errors.password}</p>
              ) : (
                ''
              )}
            </div>

            <button
              type="submit"
              className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Зарегистрироваться
            </button>
          </div>

          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              У вас уже есть аккаунта?
              <Link to="/login" className="text-first transition duration-100 hover:text-gray-500">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
};

export default Signup;
