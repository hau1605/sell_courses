import React from 'react';
import { Card, Layout, Space } from 'antd';
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage/HomePage"
import Banner from './Banner/Banner';
import ProductDetail from './ProductDetail/ProductDetail';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';
const { Header, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};


const WebLayout = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ProductDetail" element={<ProductDetail/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Logout" element={<Logout/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/ProductList" element={<ProductList/>} />
      </Routes>
    </Layout>
    
  </Space>
  
);
export default WebLayout;