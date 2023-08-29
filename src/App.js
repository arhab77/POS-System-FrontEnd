import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/home';
import Orders from './pages/order/order';
import DataCategory from './pages/dataSetting/category';
import Profile from './pages/Profile/profile';
import LoginUser from './pages/login/login';
import RegisterUser from './pages/Register/register';
import DataTag from './pages/dataSetting/tag';
import DataProduct from './pages/dataSetting/product';
import CartPage from './pages/cart/cart';
import CheckoutPage from './pages/checkout/checkout';
import ConfirmPage from './pages/confirm/confirm';
import InvoicePage from './pages/invoice/invoice';
import { Provider } from 'react-redux';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/data-category" element={<DataCategory />} />
            <Route path="/data-tag" element={<DataTag />} />
            <Route path="/data-product" element={<DataProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
            <Route path="/invoice" element={<InvoicePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
