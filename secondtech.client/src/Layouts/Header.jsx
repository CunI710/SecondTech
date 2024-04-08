import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/icons/logo.png';
import searchIcon from '../assets/icons/search.svg';
import phoneIcon from '../assets/icons/phone.svg';
import cartIcon from '../assets/icons/photo.svg';
import login from '../assets/icons/login.png';
import Cart from '../components/Cart/Cart';
import Search from '../components/SearchComponents/Search';
import { getUser } from '../redux/slices/authSlice';
import { setOpenCart } from '../redux/slices/cartSlice';

const navLinks = [
  {
    id: 1,
    value: 'Home',
    path: '/',
  },
  {
    id: 2,
    value: 'Смартфоны',
    path: '/smartphone',
  },
  {
    id: 3,
    value: 'Ноутбуки',
    path: '/laptop',
  },
  {
    id: 4,
    value: 'Планшеты',
    path: '/product',
  },
  {
    id: 5,
    value: 'Продать',
    path: '/blalbla',
  },
];
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { count } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { openCart } = useSelector((state) => state.cart);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    dispatch(setOpenCart(!openCart));
  };

  return (
    <header className="bg-black mb-5 fixed top-0 right-0 w-full z-50 text-[#fff]">
      <div
        className={`absolute  left-0 z-50 bg-white w-full overflow-hidden text-center py-10 transition-all shadow-lg duration-700 ${
          isSearchOpen ? 'top-0' : '-top-80 opacity-5'
        }`}
      >
        <Search toggleSearch={toggleSearch} />
      </div>

      <nav className="flex px-11 py-4 justify-between font-mont ">
        <Link to="/">
          <img src={logo} alt="logo img" className="w-[50%] " />
        </Link>
        <ul className="flex gap-10 text-[12px]">
          {navLinks.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.value}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <Link to="/login" className="w-[18px]">
            <img src={login} alt="image" />
          </Link>
          <Link onClick={toggleSearch}>
            <img src={searchIcon} alt="icon" />
          </Link>
          <Link to="">
            <img src={phoneIcon} alt="icon" />
          </Link>
          <div className="flex items-center gap-1">
            <div className="cursor-pointer" onClick={() => toggleCart()}>
              <img src={cartIcon} alt="icon" />
            </div>
            <div className="bg-first rounded-[50%] w-5 h-5 overflow-hidden flex justify-center items-center">
              <span className="text-[14px]">{count}</span>
            </div>
          </div>
        </div>
      </nav>

      <Cart />
    </header>
  );
};

export default Header;
