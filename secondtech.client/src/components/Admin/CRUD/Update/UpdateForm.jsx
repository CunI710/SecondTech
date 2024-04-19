import React, { useEffect } from 'react';
import { getProductById, updateProducts } from '../../../../redux/slices/productsSlice';
import { setOpenUpdate } from '../../../../redux/slices/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Loading from '../../../UI/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const showToast = (text) => {
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
};

const UpdateForm = () => {
  const dispatch = useDispatch();
  const { openUpdate } = useSelector((state) => state.modal);
  const { item, isLoading, productId } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [openUpdate]);
  useEffect(() => {
    setValues(item);
  }, [item]);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: item,
    onSubmit: async (values) => {
      dispatch(updateProducts(values));
      dispatch(setOpenUpdate(false));
    },
  });

  return (
    <div className="w-[95%] m-auto ">
      {values.length !== 0 ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <label htmlFor="name">
            <p className="text-[16px] text-first">Название:</p>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="category" className="">
            <p className="text-[16px] text-first">Категория:</p>
            <input
              type="text"
              name="category.name"
              id="category"
              value={values.category.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="price" className="">
            <p className="text-[16px] text-first">Цена:</p>
            <input
              type="text"
              name="price"
              id="price"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="brand" className="">
            <p className="text-[16px] text-first">Бренд:</p>
            <input
              type="text"
              name="brand.name"
              id="brand"
              value={values.brand.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="state" className="">
            <p className="text-[16px] text-first">Состояние:</p>
            <input
              type="text"
              name="state"
              id="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label className="text-[16px] text-first" htmlFor="imgUrls">
            Ссылки на изображения:
          </label>
          {values.imgUrls.map((img, index) => (
            <input
              key={index}
              type="text"
              id="imgUrls"
              name={`imgUrls[${index}].url`}
              value={img.url}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          ))}
          <label htmlFor="color" className="">
            <p className="text-[16px] text-first">Цвет:</p>
            <input
              type="text"
              name="color.name"
              id="color"
              value={values.color.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="storage" className="">
            <p className="text-[16px] text-first">Память:</p>
            <input
              type="text"
              name="storage"
              id="storage"
              value={values.storage}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="ram" className="">
            <p className="text-[16px] text-first">Оперативная память:</p>
            <input
              type="text"
              name="ram"
              id="ram"
              value={values.ram}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="model" className="">
            <p className="text-[16px] text-first">Модель:</p>
            <input
              type="text"
              name="model"
              id="model"
              value={values.model}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="processor" className="">
            <p className="text-[16px] text-first">Процессор:</p>
            <input
              type="text"
              name="processor"
              id="processor"
              value={values.processor}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="battery" className="">
            <p className="text-[16px] text-first">Батарейка:</p>
            <input
              type="text"
              name="battery"
              id="battery"
              value={values.battery}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
            />
          </label>
          <label htmlFor="characteristics" className="text-[16px] text-first">
            Характеристики:
          </label>
          {values.characteristics.map((char, index) => (
            <div key={index} className="flex gap-3 items-center">
              <input
                type="text"
                id="characteristics"
                name={`characteristics[${index}].name`}
                value={char.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border rounded-lg w-[50%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
              />
              :
              <input
                type="text"
                name={`characteristics[${index}].value`}
                value={char.value}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border rounded-lg w-[50%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
              />
            </div>
          ))}
          <div>
            <label htmlFor="packageContents" className="text-[16px] text-first">
              <span className="">Комплектация:</span>
            </label>
            <div className="flex flex-col gap-3">
              {values.packageContents.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  id="packageContents"
                  name={`packageContents[${index}].content`}
                  value={item.content}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="border rounded-lg w-[100%] border-[#c5c0c0] py-2 px-2 bg-[#F7F6F9]"
                />
              ))}
            </div>
          </div>

          {isLoading === false ? (
            <div className="flex m-auto gap-4 mt-4">
              <button
                onClick={() => dispatch(setOpenUpdate(false))}
                className="py-4 px-3 bg-first text-white uppercase rounded-md font-medium"
              >
                Отменить
              </button>
              <button
                type="submit"
                className="py-4 px-4 bg-green-500 text-white uppercase rounded-md font-medium"
              >
                Обновить
              </button>
            </div>
          ) : (
            <Loading />
          )}
        </form>
      ) : (
        <Loading />
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

export default UpdateForm;
