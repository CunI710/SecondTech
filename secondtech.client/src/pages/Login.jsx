import { useFormik } from 'formik';
import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema } from '../schemas/validation';
import { login } from '../redux/slices/authSlice';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { values, handleBlur, errors, touched, resetForm, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(login(values));
      navigate('/');
    },
  });

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 my-[80px] ">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Авторизоваться
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
                className="px-3 py-2"
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
              Войти
            </button>
          </div>

          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              У вас нету аккаунта?
              <Link
                to="/signup"
                className="text-first transition duration-100 hover:text-gray-500 "
              >
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
