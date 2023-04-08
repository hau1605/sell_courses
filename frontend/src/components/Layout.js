import React from 'react';
import { Card, Layout, Space } from 'antd';
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage/HomePage"
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
      <HomePage/>
      
    </Layout>
    
  </Space>
  
);
export default WebLayout;