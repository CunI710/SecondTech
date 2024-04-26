import React, { useState } from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/productsSlice';

const MyPagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.products);
  const onChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <div className="w-[80%] m-auto flex justify-center py-5 ">
      <Pagination current={currentPage} onChange={onChange} total={30} />
    </div>
  );
};
export default MyPagination;
