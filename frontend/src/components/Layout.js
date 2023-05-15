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
import CheckOut from './CheckOut/CheckOut';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import ResetPass from './ResetPass/ResetPass';
import MyProducts from './User/MyProducts/MyProducts';
import User from './User/User'
import UserAccount from "./User/UserAccount";
import UserPassword from "./User/UserPassword";
import { SnackbarProvider } from 'notistack';
import Footer from './Footer/Footer';
import VideoPage from './Video/VideoPage';
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
          <Route path='/order' element={<CheckOut />} />
          <Route path="/ProductList/" element={<ProductList />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/reset-password" element={<ResetPass />} />
          <Route path="/user" element={<UserAccount />} />
          <Route path="/user/profile" element={<UserAccount/>} />
          <Route path="/user/password" element={<UserPassword/>} />
          <Route path="/user/my-course" element={<MyProducts/>} />
          <Route path="/user/my-course/:id" element={<VideoPage/>} />
        </Routes>
        <Footer/>
      </Layout>

    </Space>
  </SnackbarProvider>


);
export default WebLayout;