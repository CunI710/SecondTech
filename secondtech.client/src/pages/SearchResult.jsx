import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/productComponents/ProductCard';
import SearchCard from '../components/SearchComponents/SearchCard';
import Header from '../Layouts/Header';

const SearchResult = () => {
  const { searchProducts, isLoading, searchValue } = useSelector((state) => state.search);

  return (
    <>
      <div className="flex flex-col gap-5 w-[60%] m-auto pt-[200px]">
        {searchProducts.length !== 0 ? (
          <div className="">
            <div className="flex mb-5">
              <p className="text-gray-500">
                {searchProducts.length}
                <span> результатов по запросу: </span>
                {searchValue}
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-5 gap-5">
              {searchProducts.map((item) => (
                <SearchCard item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div class="h-screen flex justify-center px-4">
            <h1 class="uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Ops | Not Found
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResult;
