import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

import aboutBg from '../../assets/background/about.png.png';
import { phoneSchema } from '../../schemas/validation';

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
const About = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        phone: '',
      },
      validationSchema: phoneSchema,
      onSubmit: async (values) => {
        try {
          console.log(values);
          showToast('Успешно отправлено;)', true);
        } catch (error) {
          console.error('Fetch error:', error);
        }
      },
    });

  useEffect(() => {
    if (touched.phone && errors.phone) {
      showToast('Неправильный номер', false);
    }
  }, [touched.phone, errors.phone]);

  return (
    <div className="flex justify-between items-center w-[90%] m-auto ">
      <div className="flex-1 flex flex-col gap-5 leading-[168%]">
        <div>
          <h1 className="text-[22px] font-semibold py-3 ">
            Первый интернет-магазин бу техники в КР!
          </h1>
          <p className="text-[16px] ">
            "Добро пожаловать в "SecondTech" - первый интернет-магазин бу техники! Мы гордимся тем,
            что предлагаем самый широкий выбор бу техники по выгодным ценам. Наш магазин создан для
            тех, кто ценит надежность и качество техники. Мы стремимся сделать покупки удобными и
            доступными для каждого клиента. У нас вы найдете проверенные варианты бу техники с
            гарантией качества. Надеемся на долгосрочное сотрудничество и желаем вам удачных покупок
            в "SecondTech"!"
          </p>
        </div>
        <form className="flex gap-5" onSubmit={handleSubmit}>
          <InputMask
            mask="0(999) 999-999"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            name="phone"
            placeholder="Ваш контактный телефон"
            className="py-3 px-4 w-[50%] rounded-full"
          />
          <button
            type="submit"
            className="py-3 px-2 w-[40%] bg-first text-white font-semibold rounded-full"
          >
            Получить консультацию
          </button>
        </form>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={aboutBg} alt="image" />
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

export default About;
