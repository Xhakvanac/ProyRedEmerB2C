import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../app/routes/index';
import { ProductDetail } from '../../app/routes/ProductDetail';
import { Cart } from '../../app/routes/Cart';
import { Dashboard } from '../../app/routes/artisan/Dashboard';
import { Products } from '../../app/routes/artisan/Products';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/artisan/dashboard" element={<Dashboard />} />
        <Route path="/artisan/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};
