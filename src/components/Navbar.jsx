
import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <Header style={{ background: darkMode ? '#333' : '#fff', padding: 0 }}>
      <div style={{ color: darkMode ? '#fff' : '#000', fontSize: '24px', fontWeight: 'bold', float: 'left', marginLeft: '20px' }}>
        TendryBet
      </div>
    </Header>
  );
};

export default Navbar;
