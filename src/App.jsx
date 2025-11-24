import Blog from './pages/blog/blog';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Order from './pages/orders/order';
import Company from './pages/company/company';
import Register from './auth/register/register';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/not-found/not-found';
import Category from './pages/home/category/category';
import MainLayout from './layout/main-layout/main-layout';
import ProductDetail from './pages/product-detail/product-detail';

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
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
