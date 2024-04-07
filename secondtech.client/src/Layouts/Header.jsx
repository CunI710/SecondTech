import React, { useState } from 'react';
import logo from '../assets/icons/logo.png';
import searchIcon from '../assets/icons/search.svg';
import phoneIcon from '../assets/icons/phone.svg';
import cartIcon from '../assets/icons/photo.svg';
import { Link } from 'react-router-dom';
import close from '../assets/icons/close.png';
import Cart from '../components/Cart/Cart';
import { useSelector } from 'react-redux';
const Header = () => {
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
      path: '/blabla',
    },
    {
      id: 5,
      value: 'Продать',
      path: '/blalbla',
    },
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { count, total } = useSelector((state) => state.cart);

  console.log(count);
  console.log(total);

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header className="bg-black mb-5 fixed top-0 right-0 w-full z-50 text-[#fff]">
      <div
        className={`absolute  left-0 z-50 bg-white w-full overflow-hidden text-center py-20 transition-all duration-700 ${
          isSearchOpen ? 'top-0' : '-top-80 opacity-5'
        }`}
      >
        <form className="flex justify-center gap-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Iphone 15 pro ..."
            className="bg-[#f5f6ff] py-5 px-5 w-[50%] rounded-full  text-[#c3c3c5] focus:outline-none focus:ring-0"
          />
          <button onClick={(e) => toggleSearch(e)}>
            <img src={close} alt="icon" className="w-7" />
          </button>
        </form>
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
          <button onClick={toggleSearch}>
            <img src={searchIcon} alt="icon" />
          </button>
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

      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </header>
  );
};

export default Header;
