import React from 'react';
import { Card, Layout, Space } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import HomePage from "./HomePage/HomePage"
import Banner from './Banner/Banner';
import ProductDetail from './ProductDetail/ProductDetail';
import Login from './Login/Login';
import Register from './Register/Register';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import ResetPass from './ResetPass/ResetPass'
import User from './User/User'
import UserAccount from "./User/UserAccount";
import UserPassword from "./User/UserPassword";
import { SnackbarProvider } from 'notistack';

const WebLayout = () => (
  <SnackbarProvider maxSnack={4} autoHideDuration={1500}
  iconVariant={{
    success: '🛒',
    error: '🗑️',
    warning: '⚠️',
    info: 'ℹ️',
  }}
  >
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={{ zIndex: 1 }} >Header</Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/ProductList/:categorie/" element={<ProductList />} />
          <Route path="/ProductList/" element={<ProductList />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/reset-password" element={<ResetPass />} />
          <Route path="/user" element={<UserAccount />} />
          <Route path="/user/profile" element={<UserAccount/>} />
          <Route path="/user/password" element={<UserPassword/>} />
        </Routes>
      </Layout>

    </Space>
  </SnackbarProvider>


);
export default WebLayout;