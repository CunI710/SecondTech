import { Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Header from './Layouts/Header';
import Product from './pages/Product';
import laptopBg from './assets/background/laptopBg.png';
import phoneBg from './assets/background/SmartphoneBanner.png';
import ProductInfo from './components/productComponents/ProductInfo';
import Footer from './Layouts/Footer';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import SearchResult from './pages/SearchResult';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Succes from './components/Cart/Succes';
import Admin from './pages/Admin';
import Products from './components/Admin/CRUD/Products';
import AddProduct from './components/Admin/CRUD/Add/AddProduct';
import Sale from './pages/Sale';

function App() {
  const [role, setRole] = useState('user');
  const user = useSelector((state) => state.auth.user);

  // useEffect(() => {
  //   const beforeUnloadHandler = (e) => {
  //     e.preventDefault();
  //     e.returnValue = '';
  //     return '';
  //   };

  //   window.addEventListener('beforeunload', beforeUnloadHandler);

  //   return () => {
  //     window.removeEventListener('beforeunload', beforeUnloadHandler);
  //   };
  // }, []);

  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, [user]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/smartphone"
          element={
            <Product category={{ category: 'Телефон' }} banner={phoneBg} title={'Смартфоны'} />
          }
        />
        <Route
          path="/laptop"
          element={
            <Product category={{ category: 'Ноутбук' }} banner={laptopBg} title={'Ноутбуки'} />
          }
        />
        <Route path="/smartphone/:id" element={<ProductInfo />} />
        <Route path="/laptop/:id" element={<ProductInfo />} />
        <Route path="/order" element={<Order />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/succes" element={<Succes />} />
        {role === 'Admin' && (
          <Route path="/admin/*" element={<Admin />}>
            <Route path="products" element={<Products />} />
            <Route path="addProduct" element={<AddProduct />} />
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
