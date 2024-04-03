import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Header from './Layouts/Header';
import Product from './pages/Product';
import laptopBg from './assets/background/laptopBg.png';
import phoneBg from './assets/background/SmartphoneBanner.png';
import ProductInfo from './components/productComponents/ProductInfo';
import Footer from './Layouts/Footer';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const beforeUnloadHandler = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, []);

  
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
