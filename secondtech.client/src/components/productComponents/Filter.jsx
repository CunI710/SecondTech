import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { colors, laptopBrands, phoneBrands, tabletBrands } from '../../utils/defaultData';
import { getProducts } from '../../redux/slices/productsSlice';
import close from '../../assets/icons/close.png';

const Filter = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  const [defaultBrands, setDefaultBrands] = useState(['Бренд']);
  const [defaultColors, setDefaultColors] = useState(['Цвет']);
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const { currentPage } = useSelector((state) => state.products);
  console.log('current page', currentPage);
  useEffect(() => {
    setDefaultColors((prev) => [...prev, ...colors]);
    switch (location.pathname) {
      case '/smartphone':
        setDefaultBrands(phoneBrands);
        dispatch(
          getProducts({
            category: 'Телефон',
            brand,
            color,
            currentPage,
          }),
        );
        break;
      case '/laptop':
        setDefaultBrands(laptopBrands);
        dispatch(
          getProducts({
            category: 'Ноутбук',
            brand,
            color,
            currentPage,
          }),
        );
        break;
      case '/tablet':
        setDefaultBrands(tabletBrands);
        dispatch(
          getProducts({
            category: 'Планшет',
            brand,
            color,
            currentPage,
          }),
        );
        break;
      default:
        setDefaultBrands([]);
    }
  }, [location, brand, color, currentPage]);

  const clear = () => {
    setBrand('Бренд');
    setColor('Цвет');
  };

  return (
    <div className="flex gap-8">
      <form className="flex gap-4 items-center font-light">
        <div className="flex gap-4 items-center ">
          <select
            id="brandSelect"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="py-1 font-light bg-[#fcfcfc]"
          >
            {defaultBrands.map((item) => (
              <option key={item.id} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            name="Color"
            id="colorSelect"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="font-light py-1 bg-[#fcfcfc]"
          >
            {defaultColors.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* <div className="flex gap-2 items-center">
          <label htmlFor="priceFromSelect">От: </label>
          <input
            type="text"
            name="PriceFrom"
            id="priceFromSelect"
            value={values.PriceFrom}
            onChange={handleChange}
            placeholder="28000 сом"
            className="font-light"
          />
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="priceToSelect">До: </label>
          <input
            type="text"
            name="PriceTo"
            id="priceToSelect"
            value={values.PriceTo}
            onChange={handleChange}
            placeholder="208000 сом"
            className="font-light"
          />
        </div> */}
        {/* <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Price </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-96 rounded border border-gray-200 bg-white">
                <header className="flex items-center justify-between p-4">
                  <span className="text-sm text-gray-700"> The highest price is $600 </span>

                  <button
                    type="button"
                    className="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div className="border-t border-gray-200 p-4">
                  <div className="flex justify-between gap-4">
                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>

                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div> */}
        {brand !== 'Бренд' || color !== 'Цвет' ? (
          <img
            src={close}
            onClick={clear}
            alt="img close"
            className="hover:opacity-50 cursor-pointer w-4 "
          />
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default Filter;
