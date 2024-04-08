import { useFormik } from 'formik';
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import CartItem from '../components/Cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { orderSchema } from '../schemas/validation';
import EmptyCart from '../components/Cart/EmptyCart';
import { requestSale } from '../redux/slices/cartSlice';

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

const Order = () => {
  const dispatch = useDispatch();

  const { cart, total, checkout } = useSelector((state) => state.cart);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      productId: ['fe2805d1-023e-40f8-8572-45a17adce9de'],
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      city: '',
      address: '',
      // deliveryOption: 'deliveryMan',
    },
    // validationSchema: orderSchema,
    onSubmit: async (values) => {
      // await cart.forEach((element) => {
      //   values.productId.push(element.id);
      // });
      console.log(values);
      dispatch(requestSale(values));
      showToast('Успешно отправлено;)', true);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (touched.number && errors.number) {
      showToast('Неправильный номер', false);
    }
  }, [touched.number, errors.number]);

  return (
    <div className="w-[100%] m-auto">
      {total !== 0 ? (
        <div className="flex flex-col my-[100px] gap-5 w-[90%] m-auto ">
          <h1 className="text-center font-semibold text-[24px]">Ваш заказ</h1>
          <div className="flex gap-5">
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-5">
              <input
                type="text"
                placeholder="Ваше имя"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                name="firstName"
                className="border-[#000] border py-3 px-3 "
              />
              <input
                type="text"
                placeholder="Ваше фамилия"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                name="lastName"
                className="border-[#000] border py-3 px-3 "
              />
              <input
                type="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                className="border-[#000] border py-3 px-3 "
              />
              <InputMask
                mask="0(999) 999-999"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                name="number"
                placeholder="Ваш номер телефона"
                className="border-[#000] border py-3 px-3 "
              />
              <input
                type="text"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                name="city"
                placeholder="Город"
                className="border-[#000] border py-3 px-3 "
              />
              <input
                type="text"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                name="address"
                placeholder="Введите ващ адрес доставки"
                className="border-[#000] border py-3 px-3 "
              />
              <h3 className="text-[22px]">Способ доставки:</h3>
              {/* <fieldset class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="deliveryMan"
                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                  >
                    <div>
                      <p class="text-gray-700">Отправка курьером</p>
                      <p class="mt-1 text-gray-900">2 часа</p>
                    </div>
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="deliveryMan"
                      id="deliveryMan"
                      checked={values.deliveryOption === 'deliveryMan'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class="size-5 border-gray-300 text-blue-500"
                    />
                  </label>
                </div>
                <div>
                  <label
                    for="pickup"
                    class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                  >
                    <div>
                      <p class="text-gray-700">Самовызов</p>
                      <p class="mt-1 text-gray-900">24/7</p>
                    </div>
                    <input
                      type="radio"
                      name="deliveryOption"
                      value="pickup"
                      id="pickup"
                      checked={values.deliveryOption === 'pickup'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class="size-5 border-gray-300 text-blue-500"
                    />
                  </label>
                </div>
              </fieldset> */}

              <button
                type="submit"
                className="text-center py-4 w-[100%] bg-first text-white font-medium rounded-full m-auto"
              >
                Оформить заказ
              </button>
            </form>
            <div className="flex-1 flex flex-col">
              {cart.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className="text-end text-[18px] mt-3">
                <p className="font-medium">Сумма: {total} сом</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}

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

export default Order;
