import { Typography } from '@mui/material';
import { COLOR } from './config/ui/colors';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/main-layout/main-layout';
import Home from './pages/home/home';
import ProductDetail from './pages/product-detail/product-detail';
import Cart from './pages/cart/cart';
import NotFound from './pages/not-found/not-found';
import Order from './pages/orders/order';
import Category from './pages/home/category/category';
import Company from './pages/company/company';
import Blog from './pages/blog/blog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="company" element={<Company />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
