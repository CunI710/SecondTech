import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenUpdate } from '../../../../redux/slices/modalSlice';
import UpdateForm from './UpdateForm';

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { openUpdate } = useSelector((state) => state.modal);

  return (
    <>
      <Modal
        title="Обновить"
        open={openUpdate}
        onCancel={() => dispatch(setOpenUpdate(false))}
        width={700}
        footer={null}
      >
        <UpdateForm />
      </Modal>
    </>
  );
};

export default UpdateProduct;
