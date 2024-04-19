import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { setOpenDelete } from '../../../../redux/slices/modalSlice';
import { deleteProducts } from '../../../../redux/slices/productsSlice';

const DeleteProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useSelector((state) => state.products);
  const { openDelete } = useSelector((state) => state.modal);
  const handleOk = async () => {
    console.log('delete id-', productId);
    dispatch(deleteProducts(productId));
    dispatch(setOpenDelete(false));
  };

  return (
    <>
      <Modal
        title="Удалить"
        open={openDelete}
        onOk={handleOk}
        onCancel={() => dispatch(setOpenDelete(false))}
        footer={[
          <button
            key="back"
            className="text-white py-1 px-2 bg-first mr-2"
            onClick={() => dispatch(setOpenDelete(false))}
          >
            Отмена
          </button>,
          <button key="submit" className="bg-blue-500 text-white py-1 px-2" onClick={handleOk}>
            Ок
          </button>,
        ]}
      >
        <p>Вы действительно хотите удалить продукт?</p>
      </Modal>
    </>
  );
};

export default DeleteProduct;
