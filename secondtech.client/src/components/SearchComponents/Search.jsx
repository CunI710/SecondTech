import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import close from '../../assets/icons/close.png';
import { searchValidate } from '../../schemas/validation';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByName, setValue } from '../../redux/slices/searchSlice';
import { useMatch, useNavigate } from 'react-router-dom';

const Search = ({ toggleSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let path = useMatch('*');

  const [items, setItems] = useState(false);
  const { searchProducts, isLoading } = useSelector((state) => state.search);
  const { values, handleKeyDown, handleBlur, resetForm, handleChange, handleSubmit } = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: searchValidate,
    onSubmit: async (values) => {
      console.log(values.search);
      dispatch(setValue(values.search));
      dispatch(getProductByName(values.search));
      navigate('/searchresult');
    },
  });

  const handleToggle = () => {
    toggleSearch();
    resetForm();
    if (path.pathname === '/searchresult') {
      navigate(-1);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="flex gap-5 w-[60%] m-auto">
        <input
          type="text"
          name="search"
          value={values.search}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Iphone 15 pro ..."
          className="bg-[#f5f6ff] py-5 px-5 w-[100%] rounded-full  text-[#c3c3c5] focus:outline-none focus:ring-0"
        />
        <div className="flex items-center cursor-pointer" onClick={handleToggle}>
          <img src={close} alt="icon" className="w-7" />
        </div>
      </form>
    </div>
  );
};

export default Search;
