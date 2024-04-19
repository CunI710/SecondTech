import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import {
  initialValues,
  categories,
  phoneBrands,
  laptopBrands,
  rams,
  storages,
  colors,
  states,
  tabletBrands,
} from '../../../../utils/defaultData';
import { createProducts } from '../../../../redux/slices/productsSlice';
import { addProductSchema } from '../../../../schemas/validation';
import Loading from '../../../UI/Loading';

const AddProduct = () => {
  const [list, setList] = useState([0]);
  const [packageList, setPackageList] = useState([]);
  const [imgLinks, setImgLinks] = useState([]);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.products);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: addProductSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(createProducts(values));
      resetForm();
    },
  });
  console.log(errors);
  const isDelete = (index) => {
    if (list.length > 1) {
      setList(list.filter((_, i) => i !== index));
      values.characteristics.splice(index, 1);
    }
  };

  const isAdd = (index) => {
    const newValue = index;
    if (!list.includes(newValue)) {
      setList([...list, newValue]);
    }
  };

  const addPackage = (e) => {
    if (e.target.value !== '') {
      setPackageList(e.target.value.trim().split(','));
      packageList.forEach((element, index) => {
        values.packageContents[index] = {
          content: element,
          category: { name: values.category.name },
        };
      });
    }
  };

  const imgChange = (e) => {
    setImgLinks(e.target.value.trim().split(','));
    imgLinks.forEach((element, index) => {
      values.imgUrls[index] = {
        url: element,
      };
    });
  };

  const reset = () => {
    resetForm();
    setList([0]);
    setPackageList([]);
    setImgLinks([]);
  };

  return (
    <div className="w-[95%] m-auto py-20">
      <h1 className="text-[24px] font-medium mb-5 text-center">Добавить продукт</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-[16px] font-light">
        <div className="flex items-center gap-4">
          <label htmlFor="category" className="flex-[2]">
            Категория:
          </label>
          <select
            id="category"
            name="category.name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 flex-[8]"
          >
            {categories.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {values.category.name === 'Телефон' && (
          <div className="flex items-center gap-4">
            <label htmlFor="brand" className="flex-[2]">
              Бренд:
            </label>
            <select
              id="brand"
              name="brand.name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[100%] border py-1 flex-[8]"
            >
              {phoneBrands.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

        {values.category.name === 'Ноутбук' && (
          <div className="flex items-center gap-4">
            <label htmlFor="brand" className="flex-[2]">
              Бренд:
            </label>
            <select
              id="brand"
              name="brand.name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[100%] border py-1 flex-[8]"
            >
              {laptopBrands.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

        {values.category.name === 'Планшет' && (
          <div className="flex items-center gap-4">
            <label htmlFor="brand" className="flex-[2]">
              Бренд:
            </label>
            <select
              id="brand"
              name="brand.name"
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-[100%] border py-1 flex-[8]"
            >
              {tabletBrands.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex items-center gap-4">
          <label htmlFor="name" className="flex-[2]">
            Название:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 px-2 flex-[8]"
            placeholder="iPhone 15 Pro Max"
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="processor" className="flex-[2]">
            Процессор:
          </label>
          <input
            type="text"
            name="processor"
            id="processor"
            value={values.processor}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 px-2 flex-[8]"
            placeholder="Snapdaragon 21"
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="description" className="flex-[2]">
            Описание:
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 px-2 flex-[8]"
            placeholder="Красивая поверхность титановых ..."
          />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="battery" className="flex-[2]">
            Батарейка:
          </label>
          <input
            type="text"
            name="battery"
            id="battery"
            value={values.battery}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 px-2 flex-[8]"
            placeholder="4000"
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="price" className="flex-[2]">
            Цена:
          </label>
          <input
            type="text"
            name="price"
            id="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="84 990 сом"
            className="w-[100%] border py-1 px-2 flex-[8]"
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="imgUrls" className="flex-[2]">
            Ссылка на картинку:
          </label>
          <input
            type="text"
            name="imgUrls"
            id="imgUrls"
            value={imgLinks.url}
            onChange={(e) => imgChange(e)}
            onBlur={handleBlur}
            className="w-[100%] border py-1 px-2 flex-[8]"
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="ram" className="flex-[2]">
            Оперативная память:
          </label>
          <select
            id="ram"
            name="ram"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 flex-[8]"
          >
            {rams.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="storage" className="flex-[2]">
            Память:
          </label>
          <select
            id="storage"
            name="storage"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 flex-[8]"
          >
            {storages.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="color" className="flex-[2]">
            Цвет:
          </label>
          <select
            id="color"
            name="color.name"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 flex-[8]"
          >
            {colors.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="state" className="flex-[2]">
            Состояние:
          </label>
          <select
            id="state"
            name="state"
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-[100%] border py-1 flex-[8]"
          >
            {states.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="packageContents" className="flex-[2]">
            Комплектация:
          </label>
          <div className="flex-[8]">
            <input
              type="text"
              id="packageContents"
              name="packageContents"
              placeholder="Наушники, чехол, ..."
              value={packageList.content}
              onChange={(e) => addPackage(e)}
              className="w-[100%] border px-1 py-1 flex-[8]"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="charac" className="flex-[2]">
            Характеристики:
          </label>
          <div className="flex flex-col  flex-[8]">
            {list.map((char, index) => (
              <div className="flex items-center gap-3" key={index}>
                <svg
                  onClick={() => isAdd(index + 1)}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-[40px] cursor-pointer"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
                </svg>
                <svg
                  onClick={() => isDelete(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-[40px] cursor-pointer"
                  viewBox="0 0 50 50"
                >
                  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                </svg>
                <input
                  id="charac"
                  name={`characteristics[${index}].name`}
                  type="text"
                  placeholder="SIM card"
                  value={char.name}
                  onChange={handleChange}
                  className="w-[100%] border py-1 px-2 "
                />
                <input
                  type="text"
                  placeholder="Значение"
                  name={`characteristics[${index}].value`}
                  value={char.value}
                  onChange={handleChange}
                  className="w-[100%] border py-1 px-2"
                />
              </div>
            ))}
          </div>
        </div>

        {!isLoading ? (
          <div className="flex items-center gap-4 justify-center text-white mt-5">
            <Link
              onClick={reset}
              className="bg-black w-[20%] py-3 px-[60px] rounded-full  font-semibold "
            >
              Очистить
            </Link>
            <button
              type="submit"
              className="bg-first w-[25%] py-3 px-[60px] rounded-full  font-semibold "
            >
              Создать товар
            </button>
          </div>
        ) : (
          <div className="text-center">
            <Loading />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
